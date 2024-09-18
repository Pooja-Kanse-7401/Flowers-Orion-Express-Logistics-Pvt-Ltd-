import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import Contacts from "./components/Contacts"
// import APIComponent from "./components/APIComponent"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import ReduxCounter from "./components/ReduxCounter"
import Cart from "./components/Cart"
import Login from "./components/Login"
import ProtectedWrapper from "./components/ProtectedWrapper"

function App() {
  return (
    <>
      <div className="h-[100%] w-[100vw] bg-pink-100">
      
        <Router>
           
          <NavBar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About/>} />
            <Route path="/Products" element={<Products/>} />
      
            <Route element= {<ProtectedWrapper/>}>

              <Route path="/" element={<Home/>} />

            </Route>

            <Route path="/Contact" element={<Contacts/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Login" element={<Login/>} />

          </Routes>

        </Router>
      </div>


    </>
  )
}

export default App
