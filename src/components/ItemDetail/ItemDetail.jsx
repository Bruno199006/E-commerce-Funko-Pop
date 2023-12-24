
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
    </div>
    )
}
export default ItemDetail