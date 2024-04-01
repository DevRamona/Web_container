import React from "react";
import { useState } from "react";
export const AddTodo = ({todos, setTodos}) => {
    const [todoname, setTodoName] = useState ("")
    const addtodos = () => {
    if(todoname !== ""){
        setTodos([...todos, {id:todos.length+1, title: todoname, status: false}])
        setTodoName("")
    }else{
        alert("Please Enter Todo Name")
    }
    }
    
  return (
    <>
      <div className="bg-white p-2 w-full">
        <h2 className="text-2xl text-green-500 font-bold">Add Todo</h2>
        <label>Enter Todo Task:</label>
        <input onChange ={(e) => setTodoName(e.target.value)} value={todoname} type="text" className="p-2 bg-slate-300 w-full mt-2 outline-none" placeholder="Add Todo"></input>
        <button onClick={() => addtodos()} className="p-2 bg-green-700 text-white w-full  mt-3">
            Add Todo
            </button>
      </div>
    </>
  );
};





