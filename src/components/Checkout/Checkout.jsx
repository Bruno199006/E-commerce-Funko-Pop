import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { addDoc,collection } from 'firebase/firestore' 
import db from '../../db/db'
import Form from './Form'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import "./Checkout.css"

const Checkout = () => {

   const [datosForm,setDatosForm] = useState({
    nombre:"",
    telefono:"",
    email:"",
    emailRepetido:""
   })
   const [idOrden,setIdOrden] = useState(null)
   const {carrito,totalPrecio,borrarCarrito} = useContext(CartContext)
  

   const guardarDatosInput = (event) =>{
     setDatosForm({...datosForm,[event.target.name]:event.target.value})
   }
   const enviarOrden = (event) =>{
     event.preventDefault()
     if(datosForm.email === datosForm.emailRepetido){
       
       const orden = {
          comprador: {...datosForm},
          productos:[...carrito],
          fecha: new Date(),
          total:totalPrecio()
       };
       subirOrden(orden)
     }else{
      Swal.fire({
        title: 'Error!!! los E-mails deben coincidir',
        text: 'Deseas Continuar',
        icon: 'error',
        confirmButtonText: 'OK'
      })
     }
   }

   const subirOrden = (orden) =>{
    const ordenesRef = collection(db,"ordenes")
    addDoc(ordenesRef,orden).then((respuesta)=> {
      setIdOrden(respuesta.id)
      borrarCarrito()
    });
    
   }
  return (
    
  <div className='main-order-container'>
    {
        idOrden ? (
            <div className="order-container">
              <h1>
               Se ha generado la orden!!! 
              </h1>
              <img src="https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw1415b36f/images/funko/7487-1.png?sw=800&sh=800" alt="" />
              <h2>Detalle de orden:</h2>
              <p>{ idOrden }</p>
              <button><Link to="/">Ver mas productos</Link></button>
            </div>
        ):(
          
             <Form datosForm = {datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden} />
         
        )
    }
  </div>
    
  )
}

export default Checkout