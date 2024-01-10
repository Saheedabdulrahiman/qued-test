

export default function Card({heading,image,userName}) {
  return (
<>
      <div className=" flex-row m-6 font-lexend rounded-lg">
        <div className=" flex">
        <img className="  w-14 h-14 rounded-lg" src={image} alt={image} />
        <h2 className=" font-medium text-base capitalize px-2 ml-2 ">{heading}</h2>
        </div>
        <div className=" my-2">
            <h3 className=" font-semibold text-stone-400 uppercase text-xs ">Expert</h3>
            <h2 className=" capitalize text-base">{userName}</h2>

        </div>
        <div className="flex-grow border-t-2 border-l-2 h-0 "></div>
        <div className=" flex justify-between pt-6 px-1 ">
            <h2>Today,5:30 pm</h2>
            <p>Session 14/15</p>
        </div>
      </div>

  </>  
  )
}
