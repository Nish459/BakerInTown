import React from 'react'
import { useSelector } from 'react-redux';
import CartPrdouct from '../components/cartPrdouct';
import {loadStripe} from '@stripe/stripe-js'
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const productCartItem = useSelector((state) => state.product.cartItem);
    const user = useSelector(state => state.user)
    const navigate = useNavigate()


    const totalPrice = productCartItem.reduce(
        (acc, curr) => acc + parseInt(curr.total),
        0
    );
    const totalQty = productCartItem.reduce(
        (acc, curr) => acc + parseInt(curr.qty),
        0
    );
    const handlePayment = async()=>{
        if(user.email){
          
            const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
            const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/checkout-payment`,{
              method : "POST",
              headers  : {
                "content-type" : "application/json"
              },
              body  : JSON.stringify(productCartItem)
            })
            if(res.statusCode === 500) return;
  
            const data = await res.json()
            console.log(data)
  
            // alert("Redirect to payment Gateway")
            stripePromise.redirectToCheckout({sessionId : data}) 
        }
        else{
          alert("You have not Login!")
          setTimeout(()=>{
            navigate("/login")
          },1000)
        }
    }
  return (
    <div className='p-2 md:p-4'>
      <h2 className='text-lg font-bold text-slate-100 md:text-xl'>Your Cart Items</h2>
      
        <div className="my-4 flex gap-6">
            <div className="w-full max-w-3xl">
                {
                productCartItem.map((el) => {
                return (
                    <CartPrdouct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total} //change
                    price={el.price} //change
                    />
                );
            })}
            </div>
        

            <div className="relative w-full max-w-md  bg-pink-100 ml-auto rounded">
                <h2 className='p-3 bg-gray-950 text-lg  text-pink-100 '>Checkout</h2>
                <div className="flex px-3 py-2 text-lg">
                    <p>Total Products:</p>
                    <p className='ml-auto w-32 font-bold'>{totalQty}</p>
                </div>
                <div className="flex w-full p-3 text-lg">
                    <p>Total Amount:</p>
                    <p className='ml-auto w-32 font-bold '><span>Rs: </span>{parseInt(totalPrice)}</p>
                </div>
                <button 
                    className="text-slate-900 itmes-center m-2 px-3 py-2 rounded border-2 min-w-[30px] border-slate-900/100 border-width-2 hover:bg-slate-800 hover:text-white font-semibold"
                    onClick={handlePayment}>Payment
                </button>
            </div>
        </div>
    </div>
  )
}
