import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const ComTask = () => {
  const tasks = useSelector((state) => state.allTasks.taskArr)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 h-[85%] overflow-y-scroll p-auto m-2">


      {tasks.map((task) => (
        task.completed && <Card task={task} key={task.name}></Card>
      ))}
    </div>
  )
}

export default ComTask
