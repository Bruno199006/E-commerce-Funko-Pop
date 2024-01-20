import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
const { totalCantidad } = useContext(CartContext)
    return (
        <Link to="/carrito" className = "cartwidget">
         <img src="/img/cart.png" alt="imagen icono del carrito de compras" />
         <p>
            {totalCantidad()}
         </p>
        </Link>
    )
}
export default CartWidget