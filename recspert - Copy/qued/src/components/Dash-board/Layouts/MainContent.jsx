import Card from "../Main-content/Card";
import dance from '../Main-img/li-yang-p5j_jd9XDSM-unsplash.jpg'
import yoga from "../Main-img/jared-rice-NTyBbu66_SI-unsplash.jpg"
import Package from "../Main-content/Package";
import boxing from '../Main-img/annie-spratt-jY9mXvA15W0-unsplash.jpg'
import archery from '../Main-img/braden-collum-9HI8UJMSdZA-unsplash.jpg'
import fishing from '../Main-img/jared-rice-NTyBbu66_SI-unsplash.jpg'
import Plan from "../Main-content/Plan";
import Profiles from "../Main-content/Profiles";

export default function MainContent() {
  return (
    <>
       
  <div className=" grid grid-cols-3 grid-rows-5 gap-2 w-full md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 grid-flow-row-dense bg-gray-200 text-center">
   
    <div className=" bg-gray-50  row-span-2 rounded-lg mt-6 ml-6">
      <Card
      heading="bharathnatyam dance"
      image={dance}
      userName="stancy"
      />
    </div>
    <div  className=" bg-gray-50  row-span-2 rounded-lg mt-6 ml-6">
      <Card
      heading="yoga teacher"
      image={yoga}
      userName="peter david"/>
    </div>
    
    <div className="  bg-gray-50 m-2 row-span-3 w-3/5 mx-auto my-auto rounded-lg">
        
        <Profiles/>
    <div className="flex-grow border-t-2 border-l-2 h-0 "></div>
    <p className=" text-amber-800 text-x p-1"> upgrade your account to unlock</p>


    </div>
    <div className=" bg-gray-50 m-2 col-span-2 my-auto py-4 px-2 rounded-lg ml-6"> 
    <Package
    name="Basics and intermidate classes of boxing"
    image={boxing}
    prize="144"/>
    </div>
    <div className=" bg-gray-50 m-2 col-span-2 my-auto py-4 px-2 rounded-lg ml-6">
     <Package
     name="Archery classes for wonme and children"
     image={archery}
     prize='150'/>

    </div>
    <div className=" bg-gray-50 m-2 col-span-2 my-auto py-4 px-2 rounded-lg ml-6">
      <Package
      name ="Advanced classes for fishing onsite"
      image={fishing}
      prize='160'/>
    </div>
    <div className=" bg-stone-300 p-1 m-2 w-3/5 mx-auto rounded-lg ">
      <Plan
      planType="premium"
      credits="20"
      prize="199"/>
    </div>
    <div className=" bg-stone-300 p-1 m-2 w-3/5 mx-auto rounded-lg">
      <Plan
      planType="gold"
      credits="50"
      prize="299"/>
    </div>
   
    
   

  </div>

    </>
  )
}
