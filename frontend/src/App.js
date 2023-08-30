import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch } from 'react-redux';
// import Contact from './pages/Contact';


function App() {
  const dispatch = useDispatch()
  // const productData = useSelector((state)=>state.product)
  
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
      const resData = await res.json()
      // console.log(resData)
      dispatch(setDataProduct(resData))
    })()
  },)
  // console.log(productData)
 
  return (
    <div>
      <Header/>
      <main className='pt-16 bg-gray-900 min-h-[calc(100vh)] '>
        <Outlet/>
        {/* <Contact/> */}
        {/* <NewProduct/> */}
      </main>
      <div className="bg-slate-900">
        
      </div>
    </div>
  );
}

export default App;
