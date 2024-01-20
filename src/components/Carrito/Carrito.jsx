
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Carrito = () =>{

  const { carrito,borrarCarrito,borrarProducto } = useContext(CartContext)
    return(
      <div>

     
      <ul style={{display:"flex"}}>
        {
          carrito.map((producto)=>(
            <li key={producto.id} style={{border:"1px solid black"}}>
              <img src={producto.imagen} alt={producto.nombre} style={{width:"20rem"}} />
              <p>{producto.nombre} </p>
              <p>cantidad{producto.cantidad}</p>
              <button onClick={ ()=> borrarProducto(producto.id) }>Eliminar producto</button>
            </li>
          ))
        }
      
      </ul>
      <button onClick={borrarCarrito}>Eliminar carrito</button>
        
      
      </div>
    )
}
export default Carrito

  