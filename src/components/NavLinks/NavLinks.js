import React from "react"
import { Link } from "gatsby"

import "./NavLinks.scss"

function NavLinks({ toggleNav }) {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/blog" onClick={toggleNav}>
          Blog
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
