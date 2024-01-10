

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import LoginImg from "../components/Login/LoginImg";
import LoignForm from "../components/Login/LoignForm";
import {useNavigate} from 'react-router-dom'

export default function LoginPage() {

const navigate = useNavigate()

function handlLogin(){
  navigate('/dash-board');
}

  return (
   <>
   <div className=" flex relative">
    
   <LoginImg/>
   
   
  <div className="  w-1/6  mt-32 px-2 py-4 ml-auto mr-24 font-lexend  ">
    <h2 className=" text-center mb-10 font-bold text-lg">Hi Welcome back!</h2>
   
   <LoignForm
   onLogin={handlLogin}/>

    <div className=" text-center items-center ">

    <div className="flex items-center mt-6">
  <div className="flex-grow border-t-2 border-r-2 h-0"></div>
  <p className="mx-4 text-stone-500 text-sm">or Login with</p>
  <div className="flex-grow border-t-2 border-l-2 h-0"></div>
</div>

    <div className=" my-4">
      <FontAwesomeIcon icon={faInstagram}  className="mr-4 size-5 " />
      <FontAwesomeIcon icon={faFacebook}  className="mr-4 size-5" />
      <FontAwesomeIcon icon={faGoogle} className=" size-5 " />
    </div>
      <div className="  flex items-center justify-center ">
      <h2 className="  font-semibold text-stone-700 mr-2 ml-4 my-7">No Accout yet?</h2> <a className=" text-amber-800 font-semibold hover:text-amber-700" href="">sign up</a>
      </div>
    </div>

    
  </div>
  </div>
   </>
  )
}
