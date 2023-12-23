
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import NavBar from "./components/Navbar/NavBar"
import { useEffect, useState } from "react"
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom"


function App() {
  
  return (
    <BrowserRouter>

    < NavBar />

    <Routes>

      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:categoria" element={<ItemListContainer/>}/> 
      <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
