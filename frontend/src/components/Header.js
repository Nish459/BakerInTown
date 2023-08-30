import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidUser } from 'react-icons/bi'
import { BsCartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { logoutRedux } from '../redux/userSlice'




export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const userData = useSelector((state) => state.user)
    const navigate = useNavigate()
    // console.log(userData)
    const dispatch = useDispatch()

    const handleShowMenu = () => {
        setShowMenu(preve => !preve)
    }
    // console.log(process.env.REACT_APP_ADMIN_EMAIL)
    const handleLogout = () => {
        dispatch(logoutRedux())
        alert("Logged Out")
        navigate("/login");

    }
    const cartItemNumber = useSelector((state)=>state.product.cartItem)
    return (
        <header className='fixed shadow-md w-full h-16 bg-slate-950 px-2 md:px-4 z-50'>
           
            <div className='flex items-center h-full justify-between'>
                <Link to={"/"} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
                    <div className="h-14" id="home">
                        <img src={logo} className='h-full' alt="baker" />
                    </div>
                </Link>

                <div className="flex items-center gap-4 md:gap-6 text-slate-50">
                    <nav className='gap-4 md:gap-7 text-base md:text-lg hidden md:flex'>
                        <Link to={"/"} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}> Home</Link>
                        <Link to={"menu/64b666897ea342a1aa188ca9"} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>Menu</Link>
                        <Link to={"about"} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>About</Link>
                        <Link to={"/"}onClick={() => window.scrollTo({top:document.documentElement.scrollHeight, behavior: "smooth" })}>Contact</Link>
                    </nav>
                    <div className="text-2xl text-slate-50 relative">
                        <Link to={"cart"}>
                            
                            <BsCartFill />
                            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4  w-4 rounded-full m-0 p-0 text-sm  text-center">
                                {cartItemNumber.length}
                            </div>
                        </Link>
                    </div>
                    <div className="text-2xl text-slate-50" onClick={handleShowMenu}>
                        <div className="cursor-pointer" >
                            <BiSolidUser />
                        </div>
                        {showMenu && (<div className="absolute grid text-sm right-2 bg-white py-1 px-3 shadow drop-shadow-md min-w-[120px]">
                            {
                                userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={"newProduct"} className="white-space-nowrap cursor-pointer text-slate-700">New Product</Link>
                            }

                            {
                                userData.email ? <p className='text-slate-700 cursor-pointer' onClick={handleLogout}>Logout</p> : <Link to={"login"} className="white-space-nowrap cursor-pointer  text-slate-700">Login</Link>
                            }

                            <nav className='white-space-nowrap cursor-pointer  text-slate-700 flex flex-col md:hidden'>
                                <Link to={""} className='px-1 py-1'> Home</Link>
                                <Link to={"menu/64b56ca3766247870c92ab63"} className='px-1 py-1'>Cakes</Link>
                                <Link to={"about"} className='px-1 py-1'>About</Link>
                                <Link to={"contact"} className='px-1 py-1'>Contact</Link>
                            </nav>

                        </div>
                        )}

                    </div>
                </div>

            </div>


        </header>
    )
}
