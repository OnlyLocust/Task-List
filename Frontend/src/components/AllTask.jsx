import React, { useEffect } from "react";
import Card from "./Card";
import AddCard from "./AddCard";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "../store/allTasksSlice";
import axios from "axios";

const AllTask = () => {

  const dispatch = useDispatch()

  const tasks = useSelector((state) => state.allTasks.taskArr)



  useEffect(() => {

    const getTask = async () => {
      try {
        const token = localStorage.getItem('token')
        const getData = await axios.get('http://localhost:8080/api/task/get' , {
          headers:{
            'Authorization' : `bearer ${token}`
          }
        }) 
        
        dispatch(setTask(getData.data))

        
      } catch (error) {
        console.log(error);
      }
  
    }

    getTask()
  } , [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 h-[85%] overflow-y-scroll p-auto m-2">
      {tasks.map((task) => (
        <Card task={task} key={task.name}></Card>
      ))}
      <AddCard></AddCard>
    </div>
  );
};

export default AllTask;
