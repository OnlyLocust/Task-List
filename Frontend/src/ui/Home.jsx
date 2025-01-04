import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import AddTask from "../components/AddTask";
import { useDispatch , useSelector} from "react-redux";
import { changeToAdd } from "../store/taskSlice";
import AddCard from '../components/AddCard'
import AllTask from '../components/AllTask'
import ImpTask from '../components/ImpTask'
import ComTask from '../components/ComTask'
import InComTask from '../components/InComTask'
import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "../store/userSlice";


const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


 

  useEffect(  () => {

    const getUser = async () => {
      try {
        const token = localStorage.getItem('token')
        const getData = await axios.get('http://localhost:8080/api/user/get' , {
          headers:{
            'Authorization' : `bearer ${token}`
          }
        }) 
        const username = getData.data.username 
        const email = getData.data.email
        dispatch(setUser({username,email}))
        
      } catch (error) {
        navigate('/') 
      }
  
    }

      getUser()
  } , [])


  const addState = useSelector((state) => state.task)
  const nav = useSelector((state) => state.nav.navTo)

  

  return (
      <>
      {addState.isToAdd == true && <AddTask taskData={{task:addState.task , desc:addState.desc}}></AddTask>}
      <div className="bg-gray-700 h-screen w-screen text-white flex text-[10px]">
        <div className="border border-cyan rounded-2xl m-1 w-[35%] sm:w-1/5 p-2 flex flex-col justify-between">
          <Sidebar></Sidebar>
        </div>
        <div className="border border-cyan rounded-2xl m-1 w-[60%] sm:w-5/6 p-2 ">
          <div className="m-2 flex justify-between">
            <div className="font-bold text-[15px]">Your Tasks</div>
            <button className="border rounded-xl bg-green-500 w-[180px] hover:bg-green-400" onClick={() => dispatch(changeToAdd({ isToAdd: true, task:'', desc: '' }))}>
              Add Task
            </button>
          </div>
          <hr />
          {nav === "All" && <AllTask></AllTask>}
          {nav === "Important" && <ImpTask></ImpTask>}
          {nav === "Completed" && <ComTask></ComTask>}
          {nav === "Incompleted" && <InComTask></InComTask>}
        </div>
      </div>
    </>
  );
};

export default Home;
