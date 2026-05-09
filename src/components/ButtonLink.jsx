import './ButtonLink.css'

function ButtonLink({ href, icon, label, gradientClass, target = "_blank" }) {
  return (
    <a href={href} className={`btn ${gradientClass}`} target={target}>
      <span>{icon} {label}</span>
      <span>➜</span>
    </a>
  )
}

export default ButtonLink
