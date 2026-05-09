import './WhatsAppButton.css'

function WhatsAppButton() {
  const phoneNumber = '5585982207505'
  const message = 'Olá vim pelo EJA Shopping Digital e quero saber mais'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a href={whatsappUrl} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
      📱
    </a>
  )
}

export default WhatsAppButton
