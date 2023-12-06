import CartWidget from "./CartWidget"
import "./NavBar.css"


const NavBar = () => {

    return(
        <div id = "navbar">
            <img src="/img/funkopopicon.png" alt="icono de la tienda" />
          <ul>
            <li><a href="">Villanos Marvel</a></li>
            <li><a href="">Superheroes Marvel</a></li>
            <li><a href="">Harry potter</a></li>
          </ul>
          <CartWidget/>
        </div>
    )
}

export default NavBar