import Item from "../Item/Item"

import "./Itemlist.css"

const ItemList = ({productos}) => {

    return (
        <div className="item-list">
        {
            productos.map((producto)=>(
               <Item producto = {producto} key={producto.id}/>
            ))
         }
         </div>
    )
}
export default ItemList