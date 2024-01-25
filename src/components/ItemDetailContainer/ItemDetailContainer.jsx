import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc,getDoc } from "firebase/firestore"
import db from "../../db/db"

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
            <div>El producto no existe</div>
          ):(
            <ItemDetail producto = {producto}/>
          )
        }
      </div>
    )
}
export default ItemDetailContainer