import './MusicPlayer.css'

const MusicPlayer = ({
  onBack,
  isPlaying,
  togglePlay,
  currentTrack,
  nextTrack,
  prevTrack,
  tracks,
  setCurrentTrack
}) => {
  return (
    <div className="retro-content-wrapper">
      <h2 className="retro-title">Music Player</h2>

      <div className="music-player-frame">
        <div className="album-art-container">
          <div className="album-art-placeholder">
            <span style={{ fontSize: '40px' }} className={isPlaying ? 'animate-bounce' : ''}>🎵</span>
            <div style={{ marginTop: '10px' }}>Bearliann's Playlist</div>
          </div>
        </div>

        <div className="song-info">
          <div className="song-title">{tracks[currentTrack].title}</div>
          <div className="artist-name">{tracks[currentTrack].artist}</div>
        </div>

        <div className="player-controls">
          <button className="control-btn" onClick={prevTrack}>⏮</button>
          <button className="control-btn" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="control-btn" onClick={nextTrack}>⏭</button>
        </div>

        <div className="playlist">
          <div className="playlist-header">PLAYLIST:</div>
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`playlist-item ${currentTrack === index ? 'active' : ''}`}
              onClick={() => setCurrentTrack(index)}
            >
              {index + 1}. {track.title}
            </div>
          ))}
        </div>
      </div>

      <div className="retro-buttons">
        <button className="retro-btn retro-btn-red" onClick={onBack}>
          KEMBALI
        </button>
      </div>
    </div>
  )
}

export default MusicPlayer
