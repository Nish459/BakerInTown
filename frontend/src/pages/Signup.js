import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleOnChange = (e)=>{
        const {name,value} = e.target;
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })

    }
    // console.log(process.env.REACT_APP_SERVER_DOMAIN)
    const handleSubit = async(e)=>{
        e.preventDefault()
        const {firstName,email,password,confirmPassword} = data
        if(firstName && email && password && confirmPassword){
            if(password === confirmPassword){
                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
                    method: "POST",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify(data)
                })
                const dataRes = await fetchData.json()
                // console.log(dataRes)
                alert(dataRes.message)
                if(dataRes.alert){
                    navigate("/login")
                }
            }
            else{
                alert("invalid password or email")
            }
        }
        else{
            alert("Enter required fields")
        }

    }
    // console.log(data);
    return (
        <div className='p-3 md:p-4'>
            <div className="w-full max-w-sm bg-slate-400 m-auto text-black flex items-center flex-col p-4 overflow-hidden">
                <h1 className='text-2xl py-3'>Sign Up</h1>
                <form className='py-5 w-full ml-6 flex flex-col' onSubmit={handleSubit}>
                    <label htmlFor='firstName'> First Name</label>
                    <input 
                        type={"text"} 
                        value={data.firstName} 
                        onChange={handleOnChange}
                        id="firstName" 
                        name='firstName' 
                        className='mt-1 mb-3 w-80 bg-slate-200 px-3 py-1 rounded focus-within:outline-none' 
                    />

                    <label htmlFor='lastName'> Last Name</label>
                    <input 
                        type={"text"} 
                        id="lastName" 
                        value={data.lastName}
                        onChange={handleOnChange}
                        name='lastName' 
                        className='w-80 mt-1 mb-3 bg-slate-200 px-3 py-1 rounded  focus-within:outline-none'
                    />

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

                    <label htmlFor='confirmPassword'> Confirm Password</label>
                    <input 
                        type={"password"} 
                        id="confirmPassword" 
                        name='confirmPassword' 
                        value={data.confirmPassword}
                        onChange={handleOnChange}
                        className='w-80 mt-1 mb-3 bg-slate-200 px-3 py-1 rounded  focus-within:outline-none' 
                    />

                    <button type="Submit" className='max-w-[150px] w-full m-auto bg-slate-800  hover:bg-blue-900 cursor-pointer text-white text-xl font-medium text-center py-1 px-3 rounded-full mt-4'>Sign Up</button>
                </form>
                <p className='text-sm'>Already have account? <Link to={"/login"} className='text-red-800 underline font-bold'>Login</Link></p>

            </div>
        </div>
    )
}
