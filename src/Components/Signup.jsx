import React from 'react'
import { useForm } from 'react-hook-form'
import {nanoid} from 'nanoid'
import { toast } from 'react-toastify'

 function Signup(props) {
    const {pagetoggle ,setpagetoggle,users,setusers} = props
        const {register,handleSubmit ,formState: { errors },reset} = useForm()
        const submithandlersignup = (data) => {
        const emailExists = users.find(user => user.Email === data.Email)
        if(emailExists){
          toast.error("an account with this email already exists!")
          return
        }

          data.id = nanoid()
          console.log(data)
          setusers([...users,data])
          reset()
        }
    
    console.log(users)

  return (
    <div>       <form     onSubmit={handleSubmit(submithandlersignup)}
    className="w-full max-w-md bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl p-8 space-y-6">

    <h2 className="text-3xl font-semibold text-white text-center mb-8">
      let's get started!!! <br />account
    </h2>

    <div>
      <input 
        {...register("Name")}
        type="text"
        placeholder="Name"
        className="w-full px-4 py-3 bg-white/30 text-white placeholder-purple-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/40 transition"
      />
      {errors.Name && <p className="text-red-400 text-xs mt-1">{errors.Name.message}</p>}
    </div>

    <div>
      <input
       {...register("Email",{
        required: 'email is required',
        pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address"
  }

       })}
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 bg-white/30 text-white placeholder-purple-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/40 transition"
      />
            {errors.Email && <p className="text-red-400 text-xs mt-1">{errors.Email.message}</p>}

    </div>
    <div>
      <input
       {...register("Password",{required:"Password is required",minLength: {
        value: 6 ,
        message: "password must be at least 6 characters"
       }})}
        type="password" 
        placeholder="Password"
        className="w-full px-4 py-3 bg-white/30 text-white placeholder-purple-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/40 transition"
      />
            {errors.Password && <p className="text-red-400 text-xs mt-1">{errors.Password.message}</p>}

    </div>

    <button
      type="submit"
      className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-700 focus:ring-pink-400 transition duration-150 ease-in-out"
    >
      Submit
    </button>

    <div className="text-center text-purple-100 text-sm">
      <p className="inline">Already have an account? </p>
      <button
                onClick={() => setpagetoggle(!pagetoggle)}

        type="button" // Changed to type="button" to prevent form submission if it were in a real scenario
        className="font-semibold text-pink-100 hover:text-pink-200 hover:underline focus:outline-none"
      >
        Sign In
      </button>
    </div>
  </form>
</div>
  )
}

export default Signup