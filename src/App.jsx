
import ItemListContainer from "./ItemListContainer"
import NavBar from "./components/Navbar/NavBar"
import './App.css'

function App() {

  return (
    
    <div id = "app">
    < NavBar />
    
    <ItemListContainer saludo = "prop enviado desde item list container"/>
    </div>
    
   
    
  )
}

export default App
