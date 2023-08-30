import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteCartItem,increaseQty,decreaseQty } from '../redux/productSlide'

export default function CartPrdouct({ id, name, image, category, qty, total, price }) {
    const dispatch = useDispatch()

  return (
    <div className='bg-pink-100 p-2 flex gap-3 rounded border-slate-900 border-2'>
      <div className="bg-slate-900 p-3 rounded overflow-hidden">
        <img src={image} alt="loading" className='h-30 w-36 object-cover'/>
      </div>
      <div className="flex flex-col gap-1 ml-5 w-full">
        <div className="flex justify-between">
            <h3 className=' mt-4  overflow-hidden capitalize text-lg font-semibold md:text-xl'>{name}</h3>
            <div onClick={()=>dispatch(deleteCartItem(id))} className="ml-auto cursor-pointer hover:text-slate-500">
                <AiFillDelete/>
            </div>
        </div>
        <p className='text-gray-800 font-medium capitalize  ml-1'>{category}</p> 
        <p className='font-bold  ml-1'><span>Rs: </span>{(price)}</p>   
        <div className='flex justify-between w-full'>
            <div className="flex gap-3 items-center">
            <button onClick={()=>dispatch(increaseQty(id))}className='text-slate-900 mt-2  rounded border-2 min-w-[30px] border-slate-900/100 border-width-2 hover:bg-slate-800 hover:text-white font-semibold'>+</button>
            <p className='font-semibold p-1'>{qty}</p>
            <button  onClick={()=>dispatch(decreaseQty(id))} className='text-slate-900 mt-2 rounded border-2 min-w-[30px] border-slate-900/100 border-width-2 hover:bg-slate-800 hover:text-white font-semibold'>-</button>
            </div>
            <div className="flex items-center gap-2 font-bold">
                <p>Total Rs: </p>
                <p>{total}</p>
            </div>
        </div>
        
       
        </div>
    </div>
  )
}
