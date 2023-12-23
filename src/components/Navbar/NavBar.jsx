import CartWidget from "./CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {

    return(
        <nav className = "navbar">
          <Link to="/">
            <img src="/img/funkopopicon.png" alt="icono de la tienda" />
          </Link>
          <ul>
            <li><Link to="/categoria/superheroesmarvel">Super Heroes Marvel</Link></li>
            <li><Link to="/categoria/villanosmarvel">villanos Marvel</Link></li>
            <li><Link to="/categoria/harrypotter">Harry Potter</Link></li>
          </ul>
          <CartWidget/>
        </nav>
    )
}

export default NavBar