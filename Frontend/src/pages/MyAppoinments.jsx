import { useContext } from "react"
import { AppContext } from "../context/AppContext"


const MyAppoinments = () => {

  const {doctors} = useContext(AppContext)
  
  return (
    <div>
      <p>My Appoinments</p>
      <hr />
      <div>
        {

        }
      </div>
    </div>
  )
}

export default MyAppoinments