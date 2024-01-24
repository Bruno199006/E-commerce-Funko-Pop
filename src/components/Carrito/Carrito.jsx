
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const Carrito = () =>{

  const { carrito,borrarCarrito,borrarProducto,totalPrecio } = useContext(CartContext)

   if(carrito.length === 0){
    return(
      <div>
        <h2>UPS!!! el carrito esta vacio 😅😅😅 </h2>
         <Link to="/">Volver al home</Link>
      </div>
    )
   }

    return(
      <div>

     
      <ul style={{display:"flex"}}>
        {
          carrito.map((producto)=>(
            <li key={producto.id} style={{border:"1px solid black"}}>
              <img src={producto.imagen} alt={producto.nombre} style={{width:"20rem"}} />
              <p>{producto.nombre} </p>
              <p>cantidad{producto.cantidad}</p>
              <p>precio unidad $ {producto.precio}</p>
              <button onClick={ ()=> borrarProducto(producto.id) }>Eliminar producto</button>
            </li>

          )) 
        }
      
      </ul>
      <p>precio total de compra ${totalPrecio()}</p>
      <button onClick={borrarCarrito}>Eliminar carrito</button>
        
      
      </div>
    )
}
export default Carrito

  