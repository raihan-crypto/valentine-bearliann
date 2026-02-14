import { useState, useEffect } from 'react'
import './Gallery.css'

const Gallery = ({ onBack }) => {
  const [isPrinting, setIsPrinting] = useState(false)
  const [printedPhotos, setPrintedPhotos] = useState([])
  const [currentPrintIndex, setCurrentPrintIndex] = useState(0)
  const [showGrid, setShowGrid] = useState(false)

  // Daftar 8 foto
  const photoList = [
    { id: 1, image: '/photos/1.jpg', caption: 'Moment 1' },
    { id: 2, image: '/photos/2.jpg', caption: 'Moment 2' },
    { id: 3, image: '/photos/3.jpg', caption: 'Moment 3' },
    { id: 4, image: '/photos/4.jpg', caption: 'Moment 4' },
    { id: 5, image: '/photos/5.jpg', caption: 'Moment 5' },
    { id: 6, image: '/photos/6.jpg', caption: 'Moment 6' },
    { id: 7, image: '/photos/7.jpg', caption: 'Moment 7' },
    { id: 8, image: '/photos/8.jpg', caption: 'Moment 8' },
  ]

  const handleStartPrint = () => {
    setIsPrinting(true)
    setCurrentPrintIndex(0)
    setPrintedPhotos([])
    setShowGrid(false)
  }

  useEffect(() => {
    if (isPrinting && currentPrintIndex < photoList.length) {
      const timer = setTimeout(() => {
        setPrintedPhotos(prev => [...prev, photoList[currentPrintIndex]])
        setCurrentPrintIndex(prev => prev + 1)
      }, 1500) // 1.5 detik per foto

      return () => clearTimeout(timer)
    } else if (isPrinting && currentPrintIndex >= photoList.length) {
      const timer = setTimeout(() => {
        setShowGrid(true)
        setIsPrinting(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isPrinting, currentPrintIndex])

  return (
    <div className="gallery-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>◀ BACK</button>
        <h2 className="page-title">Gallery</h2>
      </div>

      <div className="gallery-content">

        {/* STATE 1: Button Cetak Foto */}
        {!isPrinting && printedPhotos.length === 0 && (
          <div className="print-button-wrapper">
            <button className="print-photos-btn" onClick={handleStartPrint}>
              📸 CETAK FOTO
            </button>
            <p className="print-subtitle">Klik untuk mencetak {photoList.length} foto</p>
          </div>
        )}

        {/* STATE 2: Sedang Printing - HANYA TAMPILKAN FOTO TERAKHIR */}
        {isPrinting && !showGrid && (
          <div className="printing-area">
            <div className="printing-status">
              Mencetak foto {currentPrintIndex} dari {photoList.length}...
            </div>
            <div className="polaroid-single">
              {printedPhotos.length > 0 && (
                <div className="polaroid-photo polaroid-printing">
                  <div className="polaroid-image">
                    <img
                      src={printedPhotos[printedPhotos.length - 1].image}
                      alt={printedPhotos[printedPhotos.length - 1].caption}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f0f0f0" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="14"%3E📸%3C/text%3E%3C/svg%3E'
                      }}
                    />
                  </div>
                  <div className="polaroid-caption">
                    {printedPhotos[printedPhotos.length - 1].caption}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STATE 3: Photo Grid - DENGAN SCROLL */}
        {showGrid && (
          <div className="photo-grid-wrapper">
            <div className="photo-grid">
              {printedPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="polaroid-photo polaroid-grid"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="polaroid-image">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f0f0f0" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="14"%3E📸%3C/text%3E%3C/svg%3E'
                      }}
                    />
                  </div>
                  <div className="polaroid-caption">{photo.caption}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Action Buttons */}
      {showGrid && (
        <div className="gallery-actions">
          <button className="action-btn btn-reprint" onClick={handleStartPrint}>
            🔄 CETAK ULANG
          </button>
          <button className="action-btn btn-back" onClick={onBack}>
            KEMBALI
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery