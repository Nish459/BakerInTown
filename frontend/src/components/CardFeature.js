import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItem} from '../redux/productSlide';
import { useDispatch } from 'react-redux';

export default function CardFeature({ image, name, price, category, id }) {
    const dispatch = useDispatch()
    const handleAddCartProduct = (e) => {
        dispatch(addCartItem({
          _id : id,
          name : name,
          price : price,
          category : category,
          image : image
        }))
      };
  return (
    <div className='w-full min-w-[200px] max-w-[200px] flex flex-col bg-slate-950 drop-shadow-lg py-4 px-5 rounded cursor-pointer'>
        <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
        <div className="h-28 justify-center flex">
            <img src={image} className='h-full max-w-[150px]' alt = {name}/>
        </div>
        <h3 className='text-slate-100 mt-4 whitespace-nowrap overflow-hidden text-center'>{name}</h3>
        <p className='text-slate-100 text-center'><span>Rs: </span>{price}</p>
        </Link>
  
        <button  onClick={handleAddCartProduct} className='hover:text-slate-100 mt-4 p-2 px-5 rounded border-2 hover:border-slate-100/100 border-width-1 bg-white hover:bg-transparent text-black font-semibold'>Add to Cart</button>
        
    </div>
  )
    
}
