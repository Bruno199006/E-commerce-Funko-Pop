import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc,getDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import db from "../../db/db"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () =>{
    
    const [producto,setProducto] = useState({})
    const { id }= useParams()
    const [productoExiste,setProductoExiste] = useState(false)

    useEffect(() =>{
     const productoRef = doc(db,"productos",id)
     getDoc(productoRef)
     .then((respuesta)=>{
      const productoDb = {id: respuesta.id,...respuesta.data()}

      if(!respuesta.exists() ){

        setProductoExiste(true)
      }
      setProducto(productoDb)
     })
    },[])

    return(
      <div>
        {
          productoExiste ? (
            <div className="producto-no-existe">
              <div>El producto no existe</div>
            <button><Link to="/">Volver al home</Link></button>
             </div>
            
          ):(
            <ItemDetail producto = {producto}/>
          )
        }
      </div>
    )
}
export default ItemDetailContainer