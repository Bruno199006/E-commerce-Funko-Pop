import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartWidget = () => {
const { totalCantidad } = useContext(CartContext)
    return (
        <div className = "cartwidget">
         <img src="/img/cart.png" alt="imagen icono del carrito de compras" />
         <p>
            {totalCantidad()}
         </p>
        </div>
    )
}
export default CartWidget