import data from './data.js'
import { Link } from "react-router-dom"

function Cards() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        {
          data.map((val, i) => {
            return (
              <>
                <div key={val.id} className="card w-72 m-3 border-2 border-gray-400 shadow-lg hover:shadow-gray-200 rounded-2xl">
                  <img src={val.imageurl} alt="" className="h-1/2 border-t-1 rounded-t-2xl" />

                  <div className=" bg-gradient-to-tr from-pink-300 to-slate-300 p-2 border-b-0 rounded-b-2xl">
                    <h1 className="text-3xl font-style: italic; text-black-50 font-bold pt-3">{val.title}</h1>
                    <p className="text-left text-slate-50 pt-3 text-xl">{val.prize} Rs.</p>
                    <p className="text-white py-2">Lorem ipsum dolor sit amet.</p>
                    <Link to="/Cart" className="border-2 border-gray-500 p-1 rounded-md bg-gray-500 text-slate-50 hover:bg-pink-700 hover:border-pink-700">Shop Now</Link>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    
    </>
  )
}



export default Cards
