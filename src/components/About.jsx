

function About() {
  return (
    <>
      <div id="About" className="h-[90vh] w-[100vw] bg-gradient-to-br from-pink-100 to-pink-400 flex justify-start pt-10 items-center flex-col">
        <h1 className="text-4xl font-bold"><span className="text-pink-700">About</span> Us</h1>
        <div id="about-inner" className="flex justify-center items-center relative">
            <div className="aboutImg h-[70%] w-[35%]" >
              <img src="https://cdn.wallpapersafari.com/13/15/wlrYfP.jpg" className="rounded-lg" alt="" />
              <p className="bg-white text-center absolute top-[55%] w-[35%] p-2 font-bold text-4xl">Best <span className="text-pink-700">Flower</span> Sellers</p>
            </div>
            <div className="content h-[70%] w-[35%] px-10 py-2">
                <h1 className="text-3xl font-bold">Why Choose Us</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde distinctio velit odit provident cum quibusdam aperiam dignissimos laborum laudantium. Expedita, totam placeat. Doloremque eos, alias id sed reiciendis culpa?</p>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non molestiae repudiandae asperiores possimus iste quidem numquam nam ab voluptas eaque?</p>
                <button className="text-white px-10 p-2 rounded-full mt-5 bg-gray-900 hover:bg-pink-700 hover:border-2">Learn More</button>

            </div>
        </div>
      </div>
    </>
  )
}

export default About
