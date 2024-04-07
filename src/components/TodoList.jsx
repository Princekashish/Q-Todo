import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../Redux/slice/tasksSlice";
import { MdDelete } from "react-icons/md";

function TodoList() {
  const tasks = useSelector((state) => state.tasks.tasks); // Assuming tasks are stored in state.tasks.tasks
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="w-[50vw] mt-6">
      {tasks.length === 0 ? (
        <p className="text-center text-red-600 font-poppins">Add a task!</p>
      ) : (
        tasks.map((task, index) => (
          <div key={task.id} className="flex justify-center mt-3">
            <h1 className="bg-white rounded-s-md w-full font-poppins md:w-[32vw] px-5 py-2">
              <span className="text-sm gap-3 text-gray-400">{index + 1}. </span>
              {task.text}
            </h1>
            <button
              onClick={() => handleDelete(task.id)}
              className="bg-red-600 px-5 py-2 rounded-r-md"
            >
              <MdDelete size={25} />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
