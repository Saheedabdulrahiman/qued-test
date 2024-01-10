import LoginBtn from "./LoginBtn";
import LoginInput from "./LoginInput";

export default function LoignForm({onLogin}) {
  return (
    <>
     <form className=" flex flex-col ">
   <LoginInput placeholder="enter email id"/>
   <LoginInput placeholder="password"/>
       
      <LoginBtn name="login"
      onLogin={onLogin}/>
      <div className=" flex justify-between mx-2 my-2" >
        <div>
      <input type="checkbox" id="rememberMe" name="rememberMe" className=" mr-1 "/>
        <label className= " text-xs" >Remember Me</label>
        </div>
        <p className=" text-xs font-semibold text-stone-700 hover:text-stone-500 ">Forgot password</p>
      </div>
    </form>
    </>
  )
}
