import {Link, useNavigate} from "react-router-dom";
import React from "react";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate()

  const submitData = async (e) => {

    e.preventDefault()
     try {
      const responce = await axios.post('http://localhost:8080/api/user/login' ,
        {
          email:e.target[0].value,
          password:e.target[1].value
        }
      )
      localStorage.setItem('token' , responce.data.token)
      navigate('/home')
     } catch (error) {
      e.target[0].value = ''
      e.target[1].value = ''
      alert('something is wrong')
      console.log(error);
      
     }
    
  }

  return (
    <div className="bg-gray-700 h-screen p-0 m-0 flex item-center justify-center text-white">
      <div className="border border-cyan rounded-2xl m-auto p-4 px-10">
        <div className="text-[20px] mb-2">Login</div>
        <hr className="mb-4" />
        <form className="flex flex-col gap-2" method="post" onSubmit={(e) => submitData(e)}>
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
            <input type="submit" value="Login" className="border rounded-lg px-3 bg-gray-500 text-[8px] hover:bg-gray-600 cursor-pointer"/>
            <div className="text-[8px] p-2 cursor-pointer text-blue-400 hover:text-blue-500"><Link to='/signup'>No account Click Here</Link></div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
