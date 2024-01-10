
import LoginBtn from "../../Login/LoginBtn";
import SideBarButton from "../UI/SideBarButton";
import rocket from '../Main-img/andy-hermawan-bVBvv5xlX3g-unsplash.jpg'


export default function SideBar() {
  return (
    <>
     
 <aside className=" w-1/3 px-8 py-2 border  font-lexend  md:w-72 ">
<div className=" bg-stone-50 flex flex-col items-center justify-center rounded-xl py-2 px-3">
    <h3 className=" font-semibold capitalize text-lg  pt-2">klara siewert </h3>
    <p className=" text-amber-800 font-medium capitalize py-2">customer</p>
    <div className=" flex  bg-stone-200 border rounded-md py-1 px-2">
        <p className=" text-stone-600 capitalize text-sm my-auto ">credit balence</p>
        <button className=" bg-amber-900 mx-2 rounded-md py-1 px-2 text-stone-50">+</button>
    </div>
 
</div>

<div className=" flex flex-col  py-3  items-start px-6 text-sm">
<SideBarButton> home</SideBarButton>
<SideBarButton> find experts</SideBarButton>
<SideBarButton> message</SideBarButton>
<SideBarButton> needs</SideBarButton>
<SideBarButton> classes</SideBarButton>
</div>

<div className="flex-grow border-t-2 border-l-2 h-0 "></div>

<div className=" flex flex-col  py-3 items-start px-6  text-sm">
<SideBarButton> my calendar</SideBarButton>
<SideBarButton> support</SideBarButton>
</div>
<div className=" px-4 shadow-2xl border border-stone-300 py-2 rounded-xl">
    <img className=" rounded-lg  w-20 h-20 mx-auto my-2" src={rocket} alt="rocket-icon" />
 <p className=" text-center  text-amber-700 hover:text-amber-900 font-semibold text-xs">want to upgrade</p>
<LoginBtn name ="upgrade now"/>
</div>
</aside>
    </>
  )
}
