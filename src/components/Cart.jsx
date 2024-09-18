import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../Utils/cardSlice'


const Cart = () => {

    const items = useSelector((state) => state.card.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className="h-[90vh] w-[100%] bg-gradient-to-br from-pink-100 to-pink-400 px-20 flex justify-center items-center">
                <div className='h-[100%] w-[50%] p-5'>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.al9TKZwQ7jd_jy53pRwL8QHaEo&pid=Api&P=0&h=220" alt="" className="w-[50%]" />
                    <h1 className="text-3xl font-style: italic; text-black-50 font-bold pt-3">Daisy Flower</h1>
                    <p className="text-left p-3 text-xl font-bold">$15</p>
                    <button
                    onClick={() => dispatch(increment())}
                    className="border-2 border-gray-500 p-2 rounded-md bg-gray-900 text-slate-50 hover:bg-pink-700 hover:border-pink-700">Add to cart</button>
                </div>
                <div className='h-[100%] w-[50%] p-5' >
                    <h1 className="text-3xl font-style: italic; text-black-50 font-bold pt-3">Your Cart</h1>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.al9TKZwQ7jd_jy53pRwL8QHaEo&pid=Api&P=0&h=220" alt="" className="w-[50%] my-10" />
                    <h1 className='text-xl font-semibold p-2'>{items} Items Added</h1>
                    <button
                    onClick={() => dispatch(increment())} 
                    className="border-2 border-gray-500 p-2 rounded-md bg-gray-900 text-slate-50 hover:bg-pink-700 hover:border-pink-700 m-2">Add item</button>
                    <button 
                    onClick={() => dispatch(decrement())}
                    className="border-2 border-gray-500 p-2 rounded-md bg-gray-900 text-slate-50 hover:bg-pink-700 hover:border-pink-700 m-2">Remove item</button>
                </div>
            </div>
        </>
    )
}

export default Cart
