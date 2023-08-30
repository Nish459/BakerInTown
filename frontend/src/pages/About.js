import React from 'react'
// import banner from '../assets/banner.jpg'

export default function About() {
  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-3xl m-auto bg-pink-200 md:flex p-4'>
        {/* <div className=" w-full p-5 shadow overflow-hidden">
          <img src={banner} alt="cake"/>
        </div> */}
        <div className="flex flex-col gap-1 ml-5">
        <h3 className=' mt-4  overflow-hidden capitalize text-2xl font-semibold md:text-4xl'>Baker In Town</h3>
        <div className="p-2 flex flex-col">
          <p className='font-medium mt-2 mb-2 text-gray-800  overflow-hidden'>
          Welcome to our home bakery, where we weave magic and create edible dreams. We take pride in crafting delicious cakes that come in a variety of flavors, each a masterpiece in its own right. From classic favorites to unique and innovative combinations, our cakes are made with love and the finest ingredients.
What truly sets us apart is our passion for customization. We believe that every celebration deserves a cake that reflects the individuality and joy of the occasion. Our specialized custom cakes are meticulously designed to capture your vision and bring it to life in edible form. From intricate designs to personalized messages, we work closely with you to create a one-of-a-kind centerpiece that will leave a lasting impression.
          </p>
          <p className='text-gray-800 font-medium text-xl flex flex-row-reverse'>-Nick</p>
        </div>
        </div>
        
       
        
      </div>
      
    </div>
  )
}
