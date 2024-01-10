import React from 'react'

export default function Plan({planType,credits,prize}) {
  return (
    <>
    <div className='flex justify-between px-2 py-3'>
     <p className=' text-amber-800 capitalize font-semibold text-sm '>{planType}</p>
     <button className=' uppercase bg-stone-400 p-1 mt-2 text-xs rounded'>custimize</button>
     </div>
     <div className=' flex justify-between mx-4'>
        <p className=' text-sm'>{credits} credits</p>
        <p>{prize}</p>
     </div>
    </>
  )
}
