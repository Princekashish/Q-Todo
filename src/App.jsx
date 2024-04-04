import { useState } from "react";
import "./App.css";
import Todoadd from "./components/Todoadd";
import TodoList from "./components/TodoList";
import { LuListTodo } from "react-icons/lu";

function App() {
  return (
    <div className="bg-zinc-900 h-screen overflow-auto overflow-x-hidden">
      <div className="flex items-center bg-gray-300 rounded-md no-scrollbar overflow-y-scroll overflow-x-hidden scroll-smooth relative top-20 left-1/2 -translate-x-1/2 md:w-[50vw] h-[80vh] md:h-[80vh] w-[100vw] flex-col  ">
        <h1 className="text-white font-poppins flex items-center gap-4 text-2xl m-3">Todo List <LuListTodo className="text-black"/></h1>
        <Todoadd />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
