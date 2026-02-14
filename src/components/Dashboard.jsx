import './Dashboard.css'
import DeviceFrame from './DeviceFrame'

const Dashboard = ({ onNavigate }) => {
  const menuItems = [
    {
      id: 'message',
      title: 'MESSAGE',
      color: 'blue'
    },
    {
      id: 'gallery',
      title: 'GALLERY',
      color: 'red'
    },
    {
      id: 'music',
      title: 'MUSIC',
      color: 'purple'
    },
    {
      id: 'tetris',
      title: 'TETRIS',
      color: 'green'
    }
  ]

  const screenContent = (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="screen-title-main" style={{ fontSize: '32px', color: '#8bac0f', textShadow: '2px 2px 0 #306230', marginBottom: '10px', textAlign: 'center', fontFamily: '"Press Start 2P", cursive' }}>
        Happy<br />Valentine!
      </div>
      <div className="screen-subtitle-main" style={{ color: '#ffd700', fontSize: '12px', animation: 'blink 1.5s infinite', textAlign: 'center', fontFamily: '"Press Start 2P", cursive', textShadow: '1px 1px 0 #b8860b' }}>
        Press Start Button
      </div>

      <div className="dashboard-info" style={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '10px 20px', fontSize: '10px', color: '#0f380f', fontFamily: 'monospace', fontWeight: 'bold' }}>
        <span className="info-left">✓ STEREO</span>
        <span className="info-right">🔋 BATTERY</span>
      </div>
    </div>
  )

  return (
    <DeviceFrame screenContent={screenContent}>
      <div className="menu-grid-2x2" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        width: '80%',
        maxWidth: '400px'
      }}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`retro-btn retro-btn-${item.color === 'blue' ? 'green' : item.color === 'red' ? 'red' : item.color === 'purple' ? 'purple' : 'green'}`}
            style={{
              padding: '15px',
              fontSize: '12px',
              fontFamily: '"Press Start 2P", cursive',
              background: item.color === 'blue' ? '#4facfe' :
                item.color === 'red' ? '#ff6b6b' :
                  item.color === 'purple' ? '#a55eea' : '#2ecc71',
              boxShadow: '0 6px 0 rgba(0,0,0,0.2)',
              border: '3px solid rgba(255,255,255,0.4)',
              borderRadius: '12px',
              textShadow: '1px 1px 0 rgba(0,0,0,0.2)',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
              letterSpacing: '1px',
              transition: 'transform 0.1s'
            }}
            onClick={() => onNavigate(item.id)}
            onMouseDown={(e) => e.target.style.transform = 'translateY(4px)'}
            onMouseUp={(e) => e.target.style.transform = 'translateY(0)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            {item.title}
          </button>
        ))}
      </div>
    </DeviceFrame>
  )
}

export default Dashboard
