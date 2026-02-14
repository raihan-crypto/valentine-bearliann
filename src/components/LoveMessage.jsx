import { useState, useEffect } from 'react'
import './LoveMessage.css'

const LoveMessage = ({ onBack }) => {
  const [typedText, setTypedText] = useState('')
  const fullText = `happy valentine, my favorite person 

sayangg. aku bikin web page sederhana ini khusus buat kamu. 

just a little something buat bilang makasih udah jadi bagian paling penting di hari-hariku babee 💌.

perjalan kita emang gak selalu mulus, we’re not perfect, and that’s okay. tapi yang aku suka, kita gak pernah stuck di situ-situ aja. kita belajar dari salah, kita mencoba saling ngertiin. pelan-pelan bertumbuh jadi better version of us, bareng-bareng .

aku gak mau kita cuma sampai sini. i want us to keep moving forward. kejar mimpi kamu setinggi mungkin, aku juga kejar mimpi aku, tapi kita jalannya tetep side by side . saling support dan gak ada yang ninggalin.

dunia di luar kadang hectic dan capek banget, tapi kalau lagi sama kamu, rasanya tenang . aku bisa istirahat jadi diri sendiri, tanpa filter, tanpa pura-pura. you really are my safe place buat pulang setelah hari yang panjang.

and honestly, yang bikin aku makin sayang itu bukan hal-hal yang mewah atau gede. tapi justru the little things. perhatian kecil kamu, random chat kamu, cara kamu ada buat aku . hal-hal simple gitu yang selalu bikin aku sadar: I'm super lucky to have you.

wuffyuu moreee sayanggg`

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index))
      index++
      if (index > fullText.length) clearInterval(interval)
    }, 15)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="retro-content-wrapper">
      <h2 className="retro-title">Message</h2>

      <div className="retro-content" style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
        {typedText}
      </div>

      <div className="retro-buttons">
        <button className="retro-btn retro-btn-red" onClick={onBack}>
          KEMBALI
        </button>
      </div>
    </div>
  )
}

export default LoveMessage
