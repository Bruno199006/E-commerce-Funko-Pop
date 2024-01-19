import "../ItemCount/ItemCount"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { CartContext } from "../../context/CartContext"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({producto}) =>{

  const [toggle,setToggle] = useState(false);

  const { agregarProducto } = useContext(CartContext)
  
  const agregarAlCarrito = (contador) =>{
    const productoNuevo = {...producto,cantidad:contador}
    agregarProducto(productoNuevo)
    setToggle(true);
  }
    return(
      <div className="info">
        
      <div className="detalle">
        <div>
        <img src={producto.imagen} alt="" />
        </div>
        <p>{producto.nombre}</p>
        <hr />
        <p>{producto.descripcion}</p>
       
        <p>$U{producto.precio}</p>
        
        <p>stock: {producto.stock}</p>
      </div>
      {
        toggle ? (
          <>
          <button className="ir-carrito"><Link to="/carrito">Terminar Compra</Link></button>
          <button className="ir-carrito"><Link to="/" >Seguir Comprando</Link></button>
          </>
        )
        :(
          
          <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>
        )
      }
    </div>
    
    )
  }
  export default ItemDetail