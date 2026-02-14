import { useState, useEffect } from 'react'
import './MemoryGame.css'

const MemoryGame = ({ onBack }) => {
  const emojis = ['💕', '💖', '💗', '💝', '💘', '💓', '💞', '💟']
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameWon, setGameWon] = useState(false)

  const initGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, matched: false }))
    
    setCards(shuffled)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setGameStarted(true)
    setGameWon(false)
  }

  const handleCardClick = (index) => {
    if (!gameStarted || flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return
    }

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [first, second] = newFlipped
      
      if (cards[first].emoji === cards[second].emoji) {
        setMatched([...matched, first, second])
        setFlipped([])
        
        if (matched.length + 2 === cards.length) {
          setTimeout(() => setGameWon(true), 500)
        }
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
  }

  useEffect(() => {
    if (!gameStarted) {
      initGame()
    }
  }, [])

  return (
    <div className="memory-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          ⬅ BACK
        </button>
        <h2 className="page-title">MEMORY GAME 🧠</h2>
      </div>

      <div className="memory-container">
        <div className="memory-info">
          <div className="info-item">
            <div className="info-label">MOVES</div>
            <div className="info-value">{moves}</div>
          </div>
          <div className="info-item">
            <div className="info-label">MATCHED</div>
            <div className="info-value">{matched.length / 2} / {emojis.length}</div>
          </div>
        </div>

        <div className="memory-board">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`memory-card ${flipped.includes(index) || matched.includes(index) ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front">💝</div>
                <div className="card-back">{card.emoji}</div>
              </div>
            </div>
          ))}
        </div>

        {!gameStarted && (
          <button className="game-btn" onClick={initGame}>
            START GAME
          </button>
        )}

        {gameStarted && (
          <button className="game-btn restart-btn" onClick={initGame}>
            RESTART
          </button>
        )}
      </div>

      {gameWon && (
        <div className="game-won-modal">
          <div className="modal-content">
            <div className="modal-title">🎉 YOU WIN! 🎉</div>
            <div className="modal-score">
              Completed in {moves} moves!
            </div>
            <div className="modal-message">
              💕 Amazing job, Bearliann! 💕<br/>
              Your memory is as sharp as your beauty!
            </div>
            <button className="game-btn" onClick={initGame}>
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MemoryGame
