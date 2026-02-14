import { useState, useEffect, useRef, useCallback } from 'react'
import './TetrisGame.css'

const ROWS = 12
const COLS = 10
const SHAPES = [
  [[1, 1, 1, 1]], // I
  [[1, 1], [1, 1]], // O
  [[0, 1, 0], [1, 1, 1]], // T
  [[1, 0, 0], [1, 1, 1]], // L
  [[0, 0, 1], [1, 1, 1]], // J
  [[0, 1, 1], [1, 1, 0]], // S
  [[1, 1, 0], [0, 1, 1]]  // Z
]
const COLORS = ['cyan', 'yellow', 'purple', 'orange', 'blue', 'green', 'red']

const TetrisGame = ({ onBack }) => {
  const [board, setBoard] = useState(Array(ROWS).fill(null).map(() => Array(COLS).fill(0)))
  const [currentPiece, setCurrentPiece] = useState(null)
  const [currentX, setCurrentX] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const [score, setScore] = useState(0)
  const [lines, setLines] = useState(0)
  const [level, setLevel] = useState(1)
  const [gameRunning, setGameRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const intervalRef = useRef(null)

  const spawnPiece = useCallback(() => {
    const shapeIndex = Math.floor(Math.random() * SHAPES.length)
    const newPiece = {
      shape: SHAPES[shapeIndex],
      color: COLORS[shapeIndex]
    }
    const startX = Math.floor(COLS / 2) - Math.floor(newPiece.shape[0].length / 2)

    setCurrentPiece(newPiece)
    setCurrentX(startX)
    setCurrentY(0)

    return { piece: newPiece, x: startX, y: 0 }
  }, [])

  const checkCollision = useCallback((x, y, shape) => {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const newX = x + col
          const newY = y + row

          if (newX < 0 || newX >= COLS || newY >= ROWS) {
            return true
          }

          if (newY >= 0 && board[newY][newX]) {
            return true
          }
        }
      }
    }
    return false
  }, [board])

  const lockPiece = useCallback(() => {
    const newBoard = board.map(row => [...row])
    for (let row = 0; row < currentPiece.shape.length; row++) {
      for (let col = 0; col < currentPiece.shape[row].length; col++) {
        if (currentPiece.shape[row][col]) {
          const boardY = currentY + row
          const boardX = currentX + col
          if (boardY >= 0) {
            newBoard[boardY][boardX] = currentPiece.color
          }
        }
      }
    }
    setBoard(newBoard)
    return newBoard
  }, [board, currentPiece, currentX, currentY])

  const clearLines = useCallback((newBoard) => {
    let linesCleared = 0
    for (let row = ROWS - 1; row >= 0; row--) {
      if (newBoard[row].every(cell => cell !== 0)) {
        newBoard.splice(row, 1)
        newBoard.unshift(Array(COLS).fill(0))
        linesCleared++
        row++
      }
    }

    if (linesCleared > 0) {
      setScore(prev => prev + linesCleared * 100)
      setLines(prev => prev + linesCleared)
      setBoard(newBoard)
    }
    return newBoard
  }, [])

  const movePiece = useCallback((direction) => {
    if (!gameRunning || !currentPiece) return

    let newX = currentX
    let newY = currentY

    if (direction === 'left') newX--
    else if (direction === 'right') newX++
    else if (direction === 'down') newY++

    if (!checkCollision(newX, newY, currentPiece.shape)) {
      setCurrentX(newX)
      setCurrentY(newY)
    } else if (direction === 'down') {
      const newBoard = lockPiece()
      const clearedBoard = clearLines(newBoard)

      const { piece, x, y } = spawnPiece()
      if (checkCollision(x, y, piece.shape)) {
        setGameRunning(false)
        setGameOver(true)
      }
    }
  }, [gameRunning, currentPiece, currentX, currentY, checkCollision, lockPiece, clearLines, spawnPiece])

  const rotatePiece = useCallback(() => {
    if (!gameRunning || !currentPiece) return

    const rotated = currentPiece.shape[0].map((_, i) =>
      currentPiece.shape.map(row => row[i]).reverse()
    )

    if (!checkCollision(currentX, currentY, rotated)) {
      setCurrentPiece({ ...currentPiece, shape: rotated })
    }
  }, [gameRunning, currentPiece, currentX, currentY, checkCollision])

  const startGame = () => {
    setBoard(Array(ROWS).fill(null).map(() => Array(COLS).fill(0)))
    setScore(0)
    setLines(0)
    setLevel(1)
    setGameRunning(true)
    setGameOver(false)
    spawnPiece()
  }

  useEffect(() => {
    if (gameRunning) {
      intervalRef.current = setInterval(() => {
        movePiece('down')
      }, 500)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [gameRunning, movePiece])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameRunning) return

      switch (e.key) {
        case 'ArrowLeft':
          movePiece('left')
          e.preventDefault()
          break
        case 'ArrowRight':
          movePiece('right')
          e.preventDefault()
          break
        case 'ArrowDown':
          movePiece('down')
          e.preventDefault()
          break
        case 'ArrowUp':
        case ' ':
          rotatePiece()
          e.preventDefault()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [gameRunning, movePiece, rotatePiece])

  const renderBoard = () => {
    const displayBoard = board.map(row => [...row])

    if (currentPiece) {
      for (let row = 0; row < currentPiece.shape.length; row++) {
        for (let col = 0; col < currentPiece.shape[row].length; col++) {
          if (currentPiece.shape[row][col]) {
            const boardY = currentY + row
            const boardX = currentX + col
            if (boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
              displayBoard[boardY][boardX] = currentPiece.color
            }
          }
        }
      }
    }

    return displayBoard.map((row, rowIndex) => (
      <div key={rowIndex} className="tetris-row">
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            className={`tetris-cell ${cell ? 'filled ' + cell : ''}`}
          />
        ))}
      </div>
    ))
  }

  return (
    <div className="tetris-game-page">
      {/* Header dengan title */}
      <div className="tetris-header">
        <h2 className="tetris-title">Tetris</h2>
      </div>

      {/* Stats bar */}
      <div className="tetris-stats">
        <div className="stat-item">
          <span className="stat-label">Score:</span>
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Level:</span>
          <span className="stat-value">{level}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Lines:</span>
          <span className="stat-value">{lines}</span>
        </div>
      </div>

      {/* Game board */}
      <div className="tetris-board-container">
        <div className="tetris-board">
          {!gameRunning && !gameOver ? (
            <div className="start-overlay">
              <button className="start-game-btn" onClick={startGame}>
                START GAME
              </button>
            </div>
          ) : (
            renderBoard()
          )}
        </div>
      </div>

      {/* Controls */}
      {gameRunning && (
        <div className="tetris-controls">
          <button className="control-btn" onClick={() => movePiece('left')}>
            &lt;
          </button>
          <button className="control-btn rotate-btn" onClick={rotatePiece}>
            ROTATE
          </button>
          <button className="control-btn" onClick={() => movePiece('right')}>
            &gt;
          </button>
        </div>
      )}

      {/* Back button */}
      <div className="tetris-footer">
        <button className="tetris-back-btn" onClick={onBack}>
          KEMBALI
        </button>
      </div>

      {/* Game Over Modal */}
      {gameOver && (
        <div className="game-over-modal">
          <div className="modal-content-valentine">
            <div className="modal-title-valentine">INGET YA!</div>
            <div className="modal-message-valentine">
              walaupun kamu kalah,<br />
              tapi kamu selalu menang<br />
              kok di hati aku, HEHE<br />
              ^_^
            </div>
            <div className="modal-love">I LOVE YOU &lt;3</div>
            <button className="modal-btn-ok" onClick={startGame}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TetrisGame