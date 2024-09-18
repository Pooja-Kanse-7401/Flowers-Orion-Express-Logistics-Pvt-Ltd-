import { useState } from "react";

function Contacts() {

  const [val, setVal] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
    gender: "",
    check: "",
    checkbox: ""
  })

  const handleChange = (e) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value
    })
    console.log(val)
  }

  const handleSubmit = () => {
    // e.preventDefault();
    console.log(`Sending ${val} to DataBase`)
    alert("Form Submited")
  }


  return (
    <>
      <div className=" h-[90vh] w-[100vw] bg-gradient-to-br from-pink-100 to-pink-400 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold mb-5"><span className="text-pink-700">Contact</span> Us</h1>
        <div className="flex justify-center items-center w-[80%]">
          <form action="" className="flex justify-center flex-col w-[100%] md:w-[50%] border-2 p-5 rounded-md hover:shadow-md hover:shadow-white border-white">

            <label htmlFor="" className="mt-2 font-semibold">First Name :</label>
            <input type="text" name="fName" id="fName" value={val.fName} className="rounded-md p-1 m-1 bg-pink-200 border-white border-2 hover:border-pink-700" onChange={handleChange} />

            <label htmlFor="" className="mt-2 font-semibold">Last Name :</label>
            <input type="text" name="lName" id="lName" value={val.lName} className="rounded-md p-1 m-1 bg-pink-200 border-white border-2 hover:border-pink-700" onChange={handleChange} />

            <label htmlFor="" className="mt-2 font-semibold">Email :</label>
            <input type="email" name="email" id="email" value={val.email} className="rounded-md p-1 m-1 bg-pink-200 border-white border-2 hover:border-pink-700" onChange={handleChange} />

            <label htmlFor="" className="mt-2 font-semibold">Contact No. :</label>
            <input type="number" name="number" id="number" value={val.number} className="rounded-md p-1 m-1 bg-pink-200 border-white border-2 hover:border-pink-700" onChange={handleChange} />

            <div className="flex flex-col">
              <label htmlFor="" className="mt-2 font-semibold">Gender :</label>
              <span>
                <input type="radio" name="gender" id="male" value="Male" onChange={handleChange}/>
                <label htmlFor="" className="ml-2">Male</label>
              </span>
              <span>
                <input type="radio" name="gender" id="female" value="Female" onChange={handleChange}/>
                <label htmlFor="" className="ml-2">Female</label>
              </span>
            </div>

            <span className="mt-3">
              <input type="checkbox" name="check" id="terms" value="Yes" onChange={handleChange}/>
              <label htmlFor="" className="ml-2">Accept terms and conditions</label>
            </span>
            <span className="mt-3">
              <input type="checkbox" name="checkbox" id="policies" value="Yes 1" onChange={handleChange}/>
              <label htmlFor="" className="ml-2">Accept Privacy Policy</label>
            </span>

            <button className="px-10 p-2 rounded-full mt-5 bg-pink-200 font-semibold hover:bg-pink-700 hover:border-2 hover:text-white w-[40%]" onClick={handleSubmit}>Submit</button>
          </form>
          {/* <div className="w-[50%] h-[100%] bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg m-3 flex justify-center items-center flex-col shadow-md shadow-white border-2 border-white">
            <h1 className="text-2xl font-bold text-pink-700">Data</h1>
            <div className="w-[90%] h-[80%]">
              <p className="p-3"><span className="font-semibold text-pink-700">First Name :</span> {val.fName}</p>
              <p className="p-3"><span className="font-semibold text-pink-700">Last Name :</span> {val.lName}</p>
              <p className="p-3"><span className="font-semibold text-pink-700">Email :</span> {val.email}</p>
              <p className="p-3"><span className="font-semibold text-pink-700">Contact No:</span> {val.number}</p>
              <p className="p-3"><span className="font-semibold text-pink-700">Gender:</span> {val.gender}</p>
              <p className="p-3"><span className="font-semibold text-pink-700">Terms and Conditions:</span> {val.check}</p>
              <p className="p-3"><span className="font-semibold text-pink-700">Privacy Policy:</span> {val.checkbox}</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Contacts;
