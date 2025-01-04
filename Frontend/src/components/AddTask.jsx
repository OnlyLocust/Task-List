import React from "react";
import { GiCancel } from "react-icons/gi";
import {useDispatch } from 'react-redux'
import { changeToAdd } from "../store/taskSlice";
import { addTask } from '../store/allTasksSlice'
import axios from "axios";

const AddTask = ({taskData}) => {

  const dispatch = useDispatch()

  const submitTask = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const desc = e.target[1].value;
    
    try {
      const token = localStorage.getItem('token')

      const sendData = await axios.post('http://localhost:8080/api/task/add-task' , {name,desc},{
        headers:{
          'Authorization' : `bearer ${token}`
        }
      })
      dispatch(addTask({name,desc}))
      dispatch(changeToAdd({ isToAdd: false, task: '', desc: '' }))

    } catch (error) {
      console.log(error);
      alert('something went wrong')
      
    }

  }

  return (
    <div className="bg-gray-700 h-screen w-screen text-white flex text-[10px] opacity-90 absolute flex justify-center items-center ">
      <div className="border border-white p-2 rounded-2xl w-[70vw]  sm:w-[40vw]">
        <div className="flex justify-end m-1" >
          <GiCancel onClick={() => dispatch(changeToAdd({ isToAdd: false, task:'', desc:'' }))} className="cursor-pointer"/>
        </div>
        <form className="flex flex-col gap-2 m-1 my-2 justify-center" onSubmit={(e) => submitTask(e)}>
          <input
            type="text"
            name="task"
            placeholder={taskData.task === '' ? 'Task' : taskData.task}
            className="border rounded-lg p-1 text-[10px] text-black font-semibold"
          />
          <textarea
            name="desc"
            rows='10'
            className="border rounded-lg p-1 text-[10px] text-black font-semibold w-full"
            placeholder={taskData.desc === '' ? 'Task Discription' : taskData.desc}

          ></textarea>
          <input type="submit" value="Submit" className="hover:scale-110 transition-all duration-600 hover:border hover:rounded-lg w-2/3 text-center m-auto" />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
