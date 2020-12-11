import React from "react"
import { Link } from "gatsby"

import "./NavLinks.scss"

function NavLinks({ toggleNav }) {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" onClick={toggleNav}>
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/conocenos" onClick={toggleNav}>
          Conócenos
        </Link>
      </li>
      <li>
        <Link to="/portafolio" onClick={toggleNav}>
          Portafolio
        </Link>
      </li>
      <li>
        <Link to="/blog" onClick={toggleNav}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/contacto" onClick={toggleNav}>
          Contacto
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
