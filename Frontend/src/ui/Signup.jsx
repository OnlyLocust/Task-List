import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

  const navigate = useNavigate()


  const submitData = async (e) => {

    e.preventDefault()
     try {
      await axios.post('http://localhost:8080/api/user/signup' ,
        {
          username:e.target[0].value,
          email:e.target[1].value,
          password:e.target[2].value
        }
      )
      navigate('/')
     } catch (error) {
      e.target[0].value = ''
      e.target[1].value = ''
      e.target[2].value = ''
      alert('something is wrong')
      console.log(error);
      
     }
    
  }

  return (
    <div>
          <div className="bg-gray-700 h-screen p-0 m-0 flex item-center justify-center text-white">
      <div className="border border-cyan rounded-2xl m-auto p-4 px-10">
        <div className="text-[20px] mb-2">SignUp</div>
        <hr className="mb-4" />
        <form className="flex flex-col gap-2" onSubmit={(e) => submitData(e)} method='post'>
        <input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            className="border rounded-lg p-1 text-[10px] text-black font-semibold"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="border rounded-lg p-1 text-[10px] text-black font-semibold"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="border rounded-lg p-1 text-[10px] text-black font-semibold"
            required

          />
          <hr  className="my-4"/>
          <div className="flex justify-between item-center">
            <input type="submit" value="SignUp" className="border rounded-lg px-3 bg-gray-500 text-[8px] hover:bg-gray-600 cursor-pointer"/>
            <div className="text-[8px] p-2 cursor-pointer text-blue-400 hover:text-blue-500"><Link to='/'>Already have account?</Link></div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
