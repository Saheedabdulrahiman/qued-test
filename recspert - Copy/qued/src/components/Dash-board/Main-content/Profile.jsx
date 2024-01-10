import React from 'react'

export default function Profile({image,name,description}) {
  return (
    <>
      <div className=' flex m-2'>
        <div >
        <img className='rounded-full h-10 w-10' src={image} alt={name} />
        </div>
        <div className=' p-2 ml-3'>
        <h2 className=' font-semibold text-sm capitalize'>{name} </h2>
        <p className=' text-xs text-stone-500'>{description}</p>
        </div>

      </div>
    </>
  )
}
