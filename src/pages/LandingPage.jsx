import ButtonLink from '../components/ButtonLink'
import WhatsAppButton from '../components/WhatsAppButton'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container">
        <div className="logo">
          EJA SHOPPING DIGITAL
        </div>

        <div className="sub">
          Produtos • Cursos • Soluções
        </div>

        <div className="buttons-container">
          <ButtonLink
            href="#"
            icon="🔥"
            label="SAIBA MAIS"
            gradientClass="saiba"
          />

          <ButtonLink
            href="https://mercadolivre.com/sec/2nJe6KD"
            icon="🛒"
            label="Mercado Livre"
            gradientClass="ml"
          />

          <ButtonLink
            href="https://go.hotmart.com/E87337257U"
            icon="💰"
            label="Hotmart"
            gradientClass="hotmart"
          />

          <ButtonLink
            href="https://instagram.com/eja.shopdigital"
            icon="📸"
            label="Instagram"
            gradientClass="insta"
          />

          <ButtonLink
            href="https://www.facebook.com/share/1E6TZhizJC/"
            icon="👍"
            label="Facebook"
            gradientClass="face"
          />

          <ButtonLink
            href="https://youtube.com/@louvoreseadoracaoemidio"
            icon="▶️"
            label="YouTube"
            gradientClass="yt"
          />
        </div>

        <div className="footer">
          EJA Shopping Digital © 2026
        </div>
      </div>

      <WhatsAppButton />
    </div>
  )
}

export default LandingPage
