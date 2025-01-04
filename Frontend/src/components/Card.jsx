import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteOneTask, updateCom, updateImp } from "../store/allTasksSlice";
import { changeToAdd } from "../store/taskSlice";

const Card = ({ task }) => {
  const dispatch = useDispatch();

  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const getData = await axios.delete(
        `http://localhost:8080/api/task/delete-task/${id}`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      dispatch(deleteOneTask(id));
    } catch (error) {
      console.log(error);
    }
  };

  const changeCom = async (id, state) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:8080/api/task/update-com/${id}`,
        { state },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      dispatch(updateCom({ id, state }));
    } catch (error) {
      console.log(error);
    }
  };

  const changeImp = async (id, state) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:8080/api/task/update-imp/${id}`,
        { state },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      dispatch(updateImp({ id, state }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border border-cyan rounded-xl p-2 h-[20vh] sm:h-[30vh] md:h-[40vh] min-h-[150px] flex flex-col justify-between">
      <div>
        <div className="font-bold m-1">{task.name}</div>
        <hr />
        <div className="text-[8px] m-1">{task.desc}</div>
      </div>
      <div className="flex justify-around item-center flex-col gap-2">
        <div
          className={`border rounded-xl  px-2 py-0.5 text-center ${
            task.completed ? "bg-green-500" : "bg-red-500"
          }     cursor-pointer`}
          onClick={() => changeCom(task._id, task.completed)}
        >
          {task.completed == true ? "Completed" : "Incomplete"}
        </div>
        <div className="flex justify-around items-center">
          <div
            className="cursor-pointer"
            onClick={() => changeImp(task._id, task.important)}
          >
            {task.important ? <FaHeart /> : <FaRegHeart />}
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              dispatch(
                changeToAdd({ isToAdd: true, task: task.name, desc: task.desc })
              )
            }
          >
            <TfiWrite />
          </div>
          <div
            className="border border-white cursor-pointer"
            onClick={() => deleteTask(task._id)}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
