import React from 'react'

export default function HomeCard({ name, image, category, price,}) {
  return (
    <div className=' bg-slate-900 bg-opacity-1.5 shadow p-2 mix-blend-screen rounded'>
        <div className="w-40 ">
            <img src={image} className='bg-blend-overlay  h-40 w-40' alt={name}/>
        </div>
    </div>
  )
}
