import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch , useSelector} from "react-redux";
import { changeToAdd } from "../store/taskSlice";

const AddCard = () => {
    const dispatch = useDispatch()
    const isAdd = useSelector((state) => state.task.isToAdd)
  return (
    <div className="border border-cyan rounded-xl p-2 h-[20vh] sm:h-[30vh] md:h-[40vh] min-h-[150px] flex flex-col justify-between items-center" onClick={() => dispatch(changeToAdd({ isToAdd: true, task: '', desc: '' }))}>
      <IoIosAddCircleOutline className={`${isAdd == false && 'scale-[400%]'} m-auto hover:scale-[500%] transition-all duration 900 text-gray-400 cursor-pointer`}/>
      <div className="font-bold text-10">Add Task</div>
    </div>
  );
};

export default AddCard;
