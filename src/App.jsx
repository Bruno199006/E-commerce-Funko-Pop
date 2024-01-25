
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import NavBar from "./components/Navbar/NavBar"
import Carrito from "./components/Carrito/Carrito.jsx"
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import { CartProvider } from "./context/CartContext.jsx"
import Checkout from "./components/Checkout/Checkout.jsx"



function App() {
  
  return (
    <BrowserRouter>

    <CartProvider>

    < NavBar />

    <Routes>

      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:categoria" element={<ItemListContainer/>}/> 
      <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
      <Route path ="/carrito" element={<Carrito/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/checkout" element ={<Checkout/>}/>
    </Routes>

    </CartProvider>

    </BrowserRouter>
  )
}

export default App
