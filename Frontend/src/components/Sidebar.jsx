import React from "react";
import { CgNotes } from "react-icons/cg";
import {useDispatch , useSelector} from 'react-redux'
import { changeNav } from "../store/navSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const nav = useSelector((state) => state.nav.navTo)
  const username = useSelector((state) => state.user.username)
  const email = useSelector((state) => state.user.email)

  const opt = [
    "All",
    "Important",
    "Completed",
    "Incompleted"

  ];

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }


  return (
    <>
      <div className="flex flex-col justify-between gap-2">
        <div className="font-bold text-[15px]">{username}</div>
        <div>{email}</div>
        <hr />
      </div>
      <div className="flex flex-col gap-5 sm:gap-4 md:gap-10">
        {opt.map((o) => (
          <div className={`flex items-center gap-3 cursor-pointer ${nav === o && 'underline underline-offset-4'} `} key={o} onClick={() => dispatch(changeNav(o))}>
            <CgNotes></CgNotes>
            <span>{o} tasks</span>
          </div>
        ))}
      </div>
      <div>
        <button className="border rounded-lg bg-red-400 w-full text-md py-2 hover:bg-red-500" onClick={() => logout()}>logout</button>
      </div>
    </>
  );
};

export default Sidebar;
