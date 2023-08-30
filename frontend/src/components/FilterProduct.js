import React from 'react'
import { PiCakeThin } from 'react-icons/pi'

export default function FilterProduct({ category, onClick, isActive }) {
    return (
        <div>
            <div onClick={onClick}>
                <div className={`${isActive?'text-3xl p-5  rounded-full cursor-pointer bg-pink-200 text-slate-950':'text-3xl p-5  rounded-full cursor-pointer text-white bg-slate-950'}`}>
                    <PiCakeThin />
                </div>
                <p className="text-center text-slate-50 font-medium my-1 capitalize">{category}</p>
            </div>
        </div>
    )
}
