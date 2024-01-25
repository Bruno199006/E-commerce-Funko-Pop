import React, { useContext, useState } from 'react'
import Form from './Form'
import { CartContext } from '../../context/CartContext'
import { addDoc,collection } from 'firebase/firestore' 
import db from '../../db/db'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

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
    
  <div>
    {
        idOrden ? (
            <div>
              <h2>
               Se ha generado la orden!!! 
              </h2>
              <p>Detalle de orden:{ idOrden }</p>
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