
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({producto}) =>{
    
    return(
        <div className="card">
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.nombre}</p>
        <button><Link to={`/detalle/${producto.id}`}className="link">Ver detalles</Link></button>
        <p>precio:$U {producto.precio}</p>
     </div>
    )
}
export default Item