
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({producto}) =>{
    const [zoom,setZoom] = useState(false)

    const handleMouseOver = () =>{
        setZoom(true)
    }
    const handleMouseLeave = () =>{
        setZoom(false)
    }
    const estiloCard = {
      transform: zoom ? 'scale(1.1)':'scale(1)',
      transition:'transform 0.3s ease-in-out'
    }
    return(
        <div
        style={estiloCard}
        onMouseOver = {handleMouseOver}
        onMouseLeave={handleMouseLeave}
         className="card">
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.nombre}</p>
        <button><Link to={`/detalle/${producto.id}`}className="link">Ver detalles</Link></button>
       
        <p>precio:$U {producto.precio}</p>
     </div>
    )
}
export default Item