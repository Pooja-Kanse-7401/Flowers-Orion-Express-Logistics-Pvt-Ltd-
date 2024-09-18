import { Link } from "react-router-dom"


function NavBar() {
  return (
    <>
      <div id="navbar" className="w-[100vw] h-[10vh] flex justify-between items-center px-[8rem] text-gray-900">
        <h1 className="text-4xl font-bold">Flowers <span className="text-pink-700 text-4xl font-bold">.</span></h1>
        <div id="navItems">
          <ul className="flex justify-between items-center gap-10 font-medium cursor-pointer">
            <Link to="/" className="hover:border-b-2 border-pink-700 text-lg">Home</Link>
            <Link to="/About" className="hover:border-b-2 border-pink-700 text-lg">About</Link>
            <Link to="/Products" className="hover:border-b-2 border-pink-700 text-lg">Products</Link>
            <Link to="/Contact" className="hover:border-b-2 border-pink-700 text-lg">Contact</Link>
            <Link to="/Cart" className="hover:border-b-2 border-pink-700 text-lg">Cart</Link>
            <Link to="/Login" className="hover:border-b-2 border-pink-700 text-lg">Login</Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar
