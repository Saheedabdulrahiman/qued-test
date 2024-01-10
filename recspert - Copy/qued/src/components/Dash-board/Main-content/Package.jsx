import React from 'react'

export default function Package({image,name,prize}) {
  return (
   <>
    <div className=' flex justify-between px-4  bg-gray-50'>
        <div className=' flex'>
            <img className=' rounded-md w-10 h-10' src={image} alt="" />
            <p className=' font-semibold text-sm ml-4  hover:font-bold transition duration-300'>{name}</p>
        </div>
        <div className=' justify-center'>
            <p className=' text-amber-900 font-bold mt-2 hover:text-amber-700'>{prize}</p>
        </div>
    </div>
   </>
  )
}
