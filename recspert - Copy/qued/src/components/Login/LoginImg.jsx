import loginImg from '../assets/login.jpg'

export default function LoginImg() {
  return (
    <>

  <div className=" w-1/2 h-3/4 absolute -top-10 -left-30 rounded-full object-cover py-3 ">
    <img
      src={loginImg}
      alt="Your Image"
      className='rounded-full object-cover '
    />
  </div>


    </>
  )
}
