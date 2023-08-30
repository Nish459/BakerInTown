import React, { useRef} from 'react'
// import HomeCard from '../components/HomeCard'
import { useSelector } from 'react-redux';
import CardFeature from '../components/CardFeature';
import {GrPrevious,GrNext} from 'react-icons/gr'
import AllProduct from '../components/AllProduct';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import banner from '../assets/banned.png'


export default function Home() {
  const productData = useSelector((state) => state.product.productList);
  // const homeProductCartList = productData.slice(30,35);
  const homeProductCartListBestSeller = productData.filter(
    (el) => el.category === "best",
    []
  );
  // const loadingArray = new Array(4).fill(null);
  // const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  }
  
  return (
    <div>
       <div className='  bg-opacity-1.5 shadow mix-blend-screen rounded w-full h-5/6 absolute'>
          <div className="w-full h-[90%]">
              <img src={banner} className='bg-blend-overlay aspect:video w-full h-[95%]' alt='banner'/>
          </div>
        </div>
      <div className="p-2 md:p-4">
      <div className='md:flex gap-4 py-2 '>
        <div className="md:w-1/2 relative">
          <h2 className='text-slate-100 text-4xl md:text-6xl font-bold'>A Taste of Home, <span className='text-slate-800 py-1'>Baked with Love</span></h2>
          <p className='text-gray-100 mt-7 text-base '>Welcome to our enchanting home bakery, where dreams turn into confectionery reality. Indulge in divine flavors and masterfully crafted cakes, each a masterpiece in its own right. From velvety chocolate temptations to delicate vanilla wonders, our creations ignite the imagination. Experience the bliss of personalized masterpieces, turning visions into edible delights. Step into our sweet sanctuary, where bespoke cakes create cherished moments that last a lifetime.</p>
          <Link to={"menu/64b666897ea342a1aa188ca9"}>
            <button type = "Submit" className='text-slate-950 my-5 p-3 rounded border-2  border-slate-900 border-width-2 hover:bg-slate-900 hover:text-white font-bold'>Order Now</button>
          </Link>
        </div>

        
        
        {/* <div className="md:w-1/2 flex flex-wrap gap-3 p-4 justify-center">
          {
            homeProductCartList[0] && homeProductCartList.map(el =>{
              return(
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                
                />
              )
            })
          }
          
        </div> */}

      </div>

      <div className="mt-[65px]">
          <div className='flex w-full items-center'>
            <h2 className='font-bold text-2xl text-slate-100 '>Best Sellers</h2>
            <div className="ml-auto gap-4 flex">
              <button onClick={preveProduct}className='bg-slate-200 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious/></button>
              <button onClick={nextProduct}className='bg-slate-200 hover:bg-slate-400 text-lg p-1 rounded'><GrNext/></button>
            </div>
          </div>
          <div className="flex gap-5 mt-4 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
            {
              homeProductCartListBestSeller.map(el =>{
                return(
                  <CardFeature
                    key={el._id+"specials"}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                )
              })
            }
            
          </div>
      </div>
      <AllProduct heading={"Your Product"}/>
      
    </div>
    <Contact/>
    </div>
  )
}
