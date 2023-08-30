import React from 'react'
import { AiFillInstagram,AiFillPhone } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import {FaRegAddressBook} from 'react-icons/fa'

export default function Contact() {
  return (
    <div className='pt-3 md:pt-4' id = "contact">
      <div className='w-full h-full m-auto bg-gray-950 md:flex p-4'>
        <div className="grid gap-1 ml-5">
        <h3 className=' mt-4  overflow-hidden capitalize text-2xl font-semibold md:text-4xl text-white'>Baker In Town</h3>
        <div className="p-2 ">
          <p className='font-medium text-lg mt-2 mb-2 text-gray-300  overflow-hidden'>
          Unleash Your Inner Pastry Artist! Join Our Exclusive Cake Baking and Icing Workshop!
          Indulge in a world of sweetness, creativity, and delectable delights at our upcoming Cake Baking and Icing Workshop!
          Are you passionate about baking? Do you dream of crafting stunning cakes that not only taste heavenly but also look like edible masterpieces? 
          If your heart races at the thought of buttercream swirls, fondant fantasies, and flavor fusions, then this workshop is tailor-made for you! </p>
          
          <p className='font-semibold text-lg mt-2 mb-2 text-gray-300 max-w-sm overflow-hidden'>For futher details reach us at:</p>

          <div className='flex gap-3 text-3xl mt-5 cursor-pointer text-white'>
            <AiFillInstagram/>
            <AiFillPhone/>
            <BsTwitter/>
            <FaRegAddressBook/>
          </div>
          
        </div>
        </div>
        
       
        
      </div>
      
    </div>
  )
}
