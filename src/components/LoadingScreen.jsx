import { useEffect, useState } from 'react'
import './LoadingScreen.css'

const LoadingScreen = ({ progress, onStart }) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setShowButton(true)
        // Auto navigate setelah 3 detik jika user tidak klik
        setTimeout(() => {
          onStart()
        }, 3000)
      }, 500)
    }
  }, [progress, onStart])

  return (
    <div className="loading-screen active">
      <div className="loading-box">
        <div className="loading-title">
          VALENTINE-GIRL
        </div>
        <div className="loading-text">
          &gt; PREPARING VALENTINE SURPRISE...
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          >
            <span className="progress-percent">{progress}%</span>
          </div>
        </div>
        {showButton && (
          <div
            className="loading-message"
            onClick={onStart}
          >
            CLICK TO START!
          </div>
        )}
      </div>
    </div>
  )
}

export default LoadingScreen
