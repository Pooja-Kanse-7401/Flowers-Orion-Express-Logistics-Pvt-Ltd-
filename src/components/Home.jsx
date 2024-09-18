import Cards from "./Cards"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div id="Home" className=" h-[90vh] w-[100vw] bg-gradient-to-br from-pink-100 to-pink-400 flex justify-center items-center">
                <div id="home-inner" className="w-[30%]">
                    <h1 className="text-6xl font-bold text-gray-900">Fresh Flowers</h1>
                    <h2 className="text-3xl text-pink-500 font-semibold py-3">Natural & Beautiful Flowers</h2>
                    <p className="mb-10">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa? adipisicing elit. Facilis dolore sit amet. Lorem ipsum dolor sit amet.</p>
                    <Link to="/Products" className="text-white px-10 p-2 rounded-full bg-gray-900 hover:bg-pink-700 hover:border-2">Shop Now</Link>
                </div>
                <div id="image" className="w-[40%] rounded-lg p-2">
                    <img className="rounded-xl ml-10" src="http://4.bp.blogspot.com/-eogfAGTjwic/UNMsgBN01GI/AAAAAAAAPqY/1t-_G2F3Kyc/s1600/Pink+Flowers+Wallpapers.jpg" alt="" />
                </div>
            </div>
            <div id="products" className="h-[100%] w-[100%] flex justify-start pt-10 items-center flex-col bg-gradient-to-br from-pink-100 to-pink-400 overflow-y-auto">
                <h1 className="text-4xl font-bold m-2">Latest<span className="text-pink-700"> Products</span></h1>
                <div id="cards" className="flex justify-center items-center w-[80%] flex-wrap ">
                    <Cards/>
                </div>
            </div>
        </>
    )
}

export default Home
