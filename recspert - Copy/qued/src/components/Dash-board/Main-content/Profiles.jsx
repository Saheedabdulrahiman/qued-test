import React from 'react'
import Profile from './profile'
import pic1 from '../Main-img/pic1.jpg'
import pic2 from '../Main-img/pic2.jpg'
import pic3 from '../Main-img/pic3.jpg'

export default function Profiles() {
  return (
    <>
     <div className=' p-3 '>
        <Profile
        image={pic1}
        name="eva johanson"
        description="soccer coach"/>
        <Profile
        image={pic2}
        name="gal gagot"
        description="sports coach"/>
         <Profile
         image={pic3}
         name="jennifer jlo"
         description="base ball player"/>

     </div>
    </>
  )
}
