
import "./Item.css"

const Item = ({producto}) =>{
    return(
        <div className="card">
            <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.nombre}</p>
        <button>ver detalles</button>
        <p>precio:$U {producto.precio}</p>
     </div>
    )
}
export default Item