import "../ItemCount/ItemCount"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({producto}) =>{
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
      <ItemCount stock={producto.stock}/>
    </div>
    
    )
}
export default ItemDetail