import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AllProduct from '../components/AllProduct';
import { addCartItem } from '../redux/productSlide';

export default function Menu() {
  const {filterby} = useParams()
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.filter(el => el._id === filterby)[0];
  // console.log(productDisplay)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay))
  };
  const handleBuy = ()=>{
    dispatch(addCartItem(productDisplay))
      navigate("/cart")
  }
  return (
    <div className='p-3 md:p-4'>
      <div className="w-full max-w-4xl m-auto bg-pink-200 md:flex">
        <div className=" bg-slate-950 max-w-sm w-full p-5 shadow overflow-hidden">
          <img src={productDisplay.image} alt="loading" className='hover:scale-105 transition-all'/>
        </div>
        <div className="flex flex-col gap-1 ml-5">
          <h3 className=' mt-4  overflow-hidden capitalize text-2xl font-semibold md:text-4xl'>{productDisplay.name}</h3>
          <p className='text-gray-800 font-medium capitalize text-2xl ml-1'>{productDisplay.category}</p> 
          <p className='font-bold md:text-2xl ml-1'><span>Rs: </span>{productDisplay.price}</p>   
          <div className="flex gap-3">
          <button onClick={handleBuy}className='text-slate-900 mt-4 p-2 px-5 rounded border-2 min-w-[100px] border-slate-900/100 border-width-2 hover:bg-slate-950 hover:text-white font-semibold'>Buy Now</button>
          <button onClick={handleAddCartProduct}className='text-slate-900 mt-4 p-2 px-5 rounded border-2 min-w-[100px] border-slate-900/100 border-width-2 hover:bg-slate-950 hover:text-white font-semibold'>Add to Cart</button>
        </div>
        <div className="p-2">
          <p className='font-semibold text-xl'>Description:</p>
          <p className='font-medium mt-2 mb-2 text-gray-800 max-w-1/2 overflow-hidden'>{productDisplay.description}</p>
        </div>
        </div>
      </div>
      <AllProduct heading={"Related Product"}/>
    </div>
  )
}
