
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Carrito.css"


const Carrito = () =>{

  const { carrito,borrarCarrito,borrarProducto,totalPrecio } = useContext(CartContext)

   if(carrito.length === 0){
    return(
      <div className="carrito-vacio">
        <h2>UPS!!! El Carrito Esta Vacio 😅😅😅 </h2>
         <button className="boton-carrito-vacio"><Link to="/">Volver al home</Link></button>
      </div>
    )
   }

    return(
      <div className="carrito-container">
      <ul>
        {
          carrito.map((producto)=>(
            <li key={producto.id} style={{border:"1px solid black"}}>
              <img src={producto.imagen} alt={producto.nombre} style={{width:"20rem"}} />
              <p>{producto.nombre} </p>
              <p>cantidad: {producto.cantidad}</p>
              <p>Precio Unidad $ {producto.precio}</p>
              <button onClick={ ()=> borrarProducto(producto.id) }>Eliminar producto</button>
            </li>

          )) 
        }
      </ul>
      <div className="base-carrito">
         <p>Precio total de compra ${totalPrecio()}</p>
         <button onClick={borrarCarrito}>Eliminar carrito</button>
         <Link to="/checkout">Continuar Con La Compra</Link>
      
      </div>
      
      </div>
    )
}
export default Carrito

  