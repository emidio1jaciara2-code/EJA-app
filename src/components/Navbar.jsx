import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          EJA Shopping Digital
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#produtos" className="nav-link">Produtos</a>
          </li>
          <li className="nav-item">
            <a href="#cursos" className="nav-link">Cursos</a>
          </li>
          <li className="nav-item">
            <a href="#solucoes" className="nav-link">Soluções</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
