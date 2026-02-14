import { useEffect, useState } from 'react'
import './DeviceFrame.css'

const DeviceFrame = ({ children, screenContent }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="device-frame">
      <div className="device-header">
        <div className="header-left">
          <div className="power-indicator">
            <div className="power-led"></div>
            <span>POWER</span>
          </div>
        </div>
        <div className="header-right">
          <div className="device-branding">GAME-GIRL</div>
        </div>
      </div>

      <div className="screen-section">
        <div className="screen-lens">
          <div className="screen-display">
            {screenContent}
          </div>
        </div>
      </div>

      <div className="device-body-area">
        {children}
      </div>

      <div className="bottom-controls-area">
        <div className="d-pad-area">
          <div className="d-pad">
            <div className="d-pad-btn d-pad-up"></div>
            <div className="d-pad-btn d-pad-right"></div>
            <div className="d-pad-btn d-pad-down"></div>
            <div className="d-pad-btn d-pad-left"></div>
            <div className="d-pad-center"></div>
          </div>
        </div>

        <div className="center-controls">
          <div className="control-pill-group">
            <div className="control-pill">
              <div className="pill-btn"></div>
              <span>SELECT</span>
            </div>
            <div className="control-pill">
              <div className="pill-btn"></div>
              <span>START</span>
            </div>
          </div>
        </div>

        <div className="action-buttons-area">
          <div className="action-btn-wrapper">
            <div className="action-btn btn-b">B</div>
          </div>
          <div className="action-btn-wrapper">
            <div className="action-btn btn-a">A</div>
          </div>
        </div>
      </div>

      <div className="device-footer-bar">
        <div className="speaker-grill-left"></div>
        <div className="brand-logo">BEARLIANN</div>
        <div className="speaker-grill-right"></div>
      </div>
    </div>
  )
}

export default DeviceFrame
