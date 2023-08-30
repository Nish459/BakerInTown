import React, { useState } from 'react'
// import { toast } from 'react-hot-toast'
import {BsCloudUpload} from 'react-icons/bs'
import { ImagetoBase64 } from '../utility/ImagetoBase64'
export default function NewProduct() {

  const [data,setData] = useState({
    name : "",
    category : "",
    image : "",
    price : "",
    description : ""
  })
  const handleOnChange = (e)=>{
    const {name,value} = e.target

    setData((preve)=>{
        return{
          ...preve,
          [name] : value
        }
    })

  }

  const uploadImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(data)
    const {name,image,category,price} = data

    if(name && image && category && price){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const fetchRes =  await fetchData.json()
  
      console.log(fetchRes)
      alert(fetchRes.message)

      setData(()=>{
        return{
          name : "",
          category : "",
          image : "",
          price : "",
          description : ""
        }
      })
    }
    else{
      alert("Enter required Fields")
    }
  }
  return (
    <div className='p-4'>
        <form className='m-auto w-full max-w-md shadow-lg bg-slate-500 rounded flex flex-col p-4' onSubmit={handleSubmit}>
          <label htmlFor='name' >Name</label>
          <input type={"text"} name="name" onChange={handleOnChange} value={data.name} className='bg-gray-300 outline-none rounded p-1 px-3 my-1'/>
          <label htmlFor='category'>Category</label>
          <select className=' bg-gray-300 rounded p-2 outline-none my-1'name='category' id = 'category'onChange={handleOnChange} value={data.category}>
            <option value={"other"}>Select Category</option>
            <option value={"Pinata"}>Pinata Cakes</option>
            <option value={"vanila"}>Vanilla Cakes</option>
            <option value={"chocolate"}>Chocolate Cakes</option>
            <option value={"jar"}>Jar Cakes</option>
            <option value={"cup"}>Cup Cakes</option>
            <option value={"best"}>Best Seller</option>
            <option value={"specials"}>Customized</option>
          </select>
          <label htmlFor='image'>Image
          <div className='h-40 w-full my-1 bg-gray-300 rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ? <img src={data.image} className="h-full" alt="cake"/> :<span className='text-5xl'><BsCloudUpload/></span>
            }
            <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
          </div>
          </label>

          <label htmlFor='price'>Price</label>
          <input type={"text"} name='price' className='my-1 bg-gray-300 rounded p-2 outline-none'onChange={handleOnChange} value={data.price}></input>
          
          <label htmlFor='description'>Description</label>
          <textarea rows={2}  name='description' className='my-1 bg-gray-300 rounded p-2 outline-none resize-none'onChange={handleOnChange} value={data.description}/>

          <button type='Submit' className='bg-slate-900 text-slate-300 rounded p-2 mx-20 mt-3 hover:bg-slate-950 font-medium'>Save</button>
        </form>
      
    </div>
  )
}
