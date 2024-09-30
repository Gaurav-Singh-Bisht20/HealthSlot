import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import MyAppoinments from "./pages/MyAppoinments"
import Appoinment from "./pages/Appoinment"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/doctors" element= {<Doctors/>}/>
        <Route path="/doctors/:speciality" element= {<Doctors/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/my-profile" element = {<Profile/>}/>
        <Route path="/my-appointments" element = {<MyAppoinments/>}/>
        <Route path="/appoinments/:docId" element = {<Appoinment/>}/>

      </Routes>
    </div>
  )
}

export default App