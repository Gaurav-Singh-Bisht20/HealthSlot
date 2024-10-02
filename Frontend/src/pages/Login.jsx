import { useState } from "react"


const Login = () => {
  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async(e)=>{
      e.preventDefault();

  }

  return (
    <form className="min-h-[80vh] flex items-center" onClick={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === 'Sign Up'? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up'? "sign up" : "Login"} to book appoinment</p>
        {
          state === 'Sign Up' && <div className="w-full">
          <label htmlFor="name">Full Name</label>
          <input className="border border-zinc-300 w-full p-2 mt-1 rounded-sm" id="name" type="text" onChange={(e)=> setName(e.target.name) } value={name} />
        </div>
        }
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input className="border border-zinc-300 w-full p-2 mt-1 rounded-sm" id="email" type="email" onChange={(e)=> setEmail(e.target.email) } value={email} />
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input className="border border-zinc-300 w-full p-2 mt-1 " id="password" type="password" onChange={(e)=> setPassword(e.target.password) } value={password} />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded text-base ">{state === 'Sign Up'? "Create Account" : "Login"}</button>
        {
          state === "Sign Up" ?  <p>Already have Account ? <span onClick={()=> setState('Login')
          } className="text-primary underline cursor-pointer">Login here</span></p>: <p>Create a new Account ? <span onClick={()=> setState('Sign Up')}  className="text-primary underline cursor-pointer">Click here</span></p>
        }
      </div>
      
    </form>
  )
}

export default Login