import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{

   const [carrito,setCarrito] = useState([])

   const agregarProducto = (producto) =>{

        const condicion = productoEnCarrito(producto.id)

          if(condicion){

          const productosModificados = carrito.map((productoEnCarrito)=>{

          if(productoEnCarrito.id ===producto.id){

          return { ...productoEnCarrito,cantidad:productoEnCarrito.cantidad + producto.cantidad }

          }else{

          return productoEnCarrito
          }
         })

         setCarrito(productosModificados)

        }else{

         setCarrito([...carrito,producto])

        }
   }
   const productoEnCarrito = (idProducto) =>{

    return carrito.some((producto)=> producto.id===idProducto)

   }
   const totalPrecio = () =>{
    return carrito.reduce((total,producto)=>total + producto.cantidad * producto.precio,0)
   }
   const totalCantidad = () =>{

    return carrito.reduce((total, producto)=> total + producto.cantidad, 0)

   }
   
   const borrarCarrito = () =>{
    setCarrito([])
   }
   const borrarProducto = (idProducto) =>{
     const productosFiltrados = carrito.filter((producto)=>producto.id !== idProducto)

     setCarrito(productosFiltrados)
   }

    return(

      <CartContext.Provider value={{carrito,agregarProducto,totalCantidad,borrarCarrito,borrarProducto,totalPrecio}}>

         {children}

      </CartContext.Provider>
    )
}

export {CartProvider,CartContext}