import { useState, useEffect, useRef } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import DeviceFrame from './components/DeviceFrame'
import Dashboard from './components/Dashboard'
import Gallery from './components/Gallery'
import MusicPlayer from './components/MusicPlayer'
import TetrisGame from './components/TetrisGame'
import MemoryGame from './components/MemoryGame'
import LoveMessage from './components/LoveMessage'

function App() {
  const [currentPage, setCurrentPage] = useState('loading')
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Audio State
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const audioRef = useRef(null)

  const [tracks] = useState([
    { title: "You", artist: "LANY", duration: "3:30", src: "/music/you! - LANY.mp3" },
    { title: "Wi$h Li$t", artist: "Taylor Swift", duration: "3:27", src: "/music/Wi$h Li$t - Taylor Swift.mp3" },
    { title: "Perfect", artist: "Ed Sheeran", duration: "4:23", src: "/music/Perfect - Ed Sheeran.mp3" },
    { title: "Andai Saja", artist: "Lomba Sihir", duration: "4:15", src: "/music/Andai Saja - Lomba Sihir Lyrics _ Lirik.mp3" },
    { title: "Who knows", artist: "Daniel Caesar", duration: "3:45", src: "/music/Who Knows - Daniel Caesar.mp3" }
  ])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(e => console.log("Audio play failed:", e))
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying, currentTrack])

  const togglePlay = () => setIsPlaying(!isPlaying)
  const nextTrack = () => setCurrentTrack((prev) => (prev + 1) % tracks.length)
  const prevTrack = () => setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const handleStartApp = () => {
    setIsLoading(false)
    setCurrentPage('dashboard')
    // Auto-play music on start
    setIsPlaying(true)
  }

  const navigateToPage = (page) => {
    setCurrentPage(page)
  }

  const navigateToDashboard = () => {
    setCurrentPage('dashboard')
  }

  // Floating hearts effect
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div')
      heart.className = 'floating-heart'
      heart.innerHTML = '💕'
      heart.style.left = Math.random() * 100 + '%'
      heart.style.animationDuration = (Math.random() * 5 + 8) + 's'
      heart.style.animationDelay = Math.random() * 5 + 's'
      document.body.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 15000)
    }

    const heartInterval = setInterval(createHeart, 3000)
    return () => clearInterval(heartInterval)
  }, [])

  if (isLoading && currentPage === 'loading') {
    return (
      <LoadingScreen
        progress={loadingProgress}
        onStart={handleStartApp}
      />
    )
  }

  return (
    <>
      <audio ref={audioRef} src={tracks[currentTrack].src} onEnded={nextTrack} />

      {currentPage === 'dashboard' ? (
        <Dashboard onNavigate={navigateToPage} />
      ) : (
        <div className="retro-window-container">
          {currentPage === 'gallery' && (
            <Gallery onBack={navigateToDashboard} />
          )}
          {currentPage === 'music' && (
            <MusicPlayer
              onBack={navigateToDashboard}
              isPlaying={isPlaying}
              togglePlay={togglePlay}
              currentTrack={currentTrack}
              nextTrack={nextTrack}
              prevTrack={prevTrack}
              tracks={tracks}
              setCurrentTrack={setCurrentTrack}
            />
          )}
          {currentPage === 'tetris' && (
            <TetrisGame onBack={navigateToDashboard} />
          )}
          {currentPage === 'memory' && (
            <MemoryGame onBack={navigateToDashboard} />
          )}
          {currentPage === 'message' && (
            <LoveMessage onBack={navigateToDashboard} />
          )}
        </div>
      )}
    </>
  )
}

export default App
