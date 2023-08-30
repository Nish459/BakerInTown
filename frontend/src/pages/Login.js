import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginRedux } from '../redux/userSlice'

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const userData = useSelector(state => state)
  
  const dispatch = useDispatch()


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    
    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })

  }
  const handleSubit = async(e) => {
    e.preventDefault()
    const { email, password } = data
    if (email && password) {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`,{
          method: "POST",
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        });
        const dataRes = await fetchData.json()
        // console.log(dataRes)
        
        alert(dataRes.message)
        if(dataRes.alert){
          dispatch(loginRedux(dataRes))
          navigate("/")
        }
        console.log(userData)

    }
    else {
      alert("Enter required fields");
    }

  }
  console.log(data);
    return (
      <div className='p-3 md:p-4'>
        <div className="w-full max-w-sm bg-slate-400 m-auto opacity-0.5 text-black flex items-center flex-col p-4 overflow-hidden">
          <h1 className='text-2xl py-3'>Log In</h1>
          <form className='py-5 w-full ml-6 flex flex-col' onSubmit={handleSubit}>
            <label htmlFor='email'> Email</label>
            <input
              type={"email"}
              id="email"
              name='email'
              className='w-80 mt-1 mb-3 bg-slate-200 px-3 py-1 rounded focus-within:outline-none'
              value={data.email}
              onChange={handleOnChange}
            />

            <label htmlFor='password'> Password</label>
            <input
              type={"password"}
              value={data.password}
              onChange={handleOnChange}
              id="password"
              name='password'
              className='w-80 mt-1 mb-3 bg-slate-200 px-3 py-1 rounded  focus-within:outline-none'
            />
            <button type="Submit" className='max-w-[150px] w-full m-auto bg-slate-800  hover:bg-blue-900 cursor-pointer text-white text-xl font-medium text-center py-1 px-3 rounded-full mt-4'>Log In</button>
          </form>
          <p className='text-sm mb-3'>Dont't have account? <Link to={"/signup"} className='text-red-800 underline font-bold'>Sign Up</Link></p>
        </div>
      </div>
    )
}
