import { useState } from "react"
import { assets } from "../assets/assets/assets_frontend/assets"


const Profile = () => {

  const [userData, setUserData] = useState({
    name :"Gaurav",
    image : assets.profile_pic,
    email : "gauravethingse@gmail.com",
    phone : '+8423984332',
    Address : {
      line1 : "sector 22 noida",
      line2 : "gautham buth nagar"
    },
    Gender : 'Male',
    DOB : '2-1-2000'
  })

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit ? <input type="text " value= {userData.name} onChange={(e)=> setUserData(prev => ({...prev, name:e.target.value}))}/>: <p>{userData.name}</p>
      }
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id</p>
          <p>{userData.email}</p>
          <p>Phone :</p>
          {
           isEdit ? <input type="text " value= {userData.phone} onChange={(e)=> setUserData(prev => ({...prev, phone:e.target.value}))}/>: <p>{userData.phone}</p>
          }
          <p>Adress :</p>
          {
          isEdit ? <p> <input onChange={e=> setUserData(prev => ({...prev, Address:{...prev.Address, line1:e.target.value}}))} type="text" /><br /><input type="text" onChange={e=> setUserData(prev => ({...prev, Address:{...prev.Address, line1:e.target.value}}))} /></p> : <p>{userData.Address.line1} <br />{userData.Address.line2}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Profile