import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/slice/tasksSlice';

function Todoadd() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask(task));
    setTask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleChange}
          className=" text-black md:w-[30vw] w-[50vw] px-4 py-3 rounded-s-md outline-none"
        />
        <button type="submit" className="bg-yellow-300 rounded-r-md text-black font-semibold font-poppins px-3 py-3">
          Add Task
        </button>
      </form>
    </>
  );
}

export default Todoadd;
