import { useEffect, useState } from "react";
import obtenerProductos from "../utilidades/data";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

   const [productos,setProductos] = useState([])
  
   useEffect(()=>{

      obtenerProductos

      .then((respuesta) => {

        setProductos(respuesta);

      })
      .catch((error) =>{

         console.log(error)
      })
      .finally(()=>{

         console.log("finalizo la promesa");
      });

   },[]);

   



   return(
    <div className = "itemlistcontainer">
         <ItemList productos = {productos}/>
    </div>
   )
}

export default ItemListContainer