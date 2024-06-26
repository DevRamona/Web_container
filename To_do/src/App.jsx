import { NavBar } from "./Todo/NavBar";

import { ViewTodo } from "./Todo/ViewTodo";
import { AddTodo } from "./Todo/AddTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  
  return (
    <>
      <NavBar></NavBar>
      <div className="flex gap-2 w-4/6 m-auto mt-20 max-md:flex-wrap max-lg:w-11/12">
        <div className="w-full">
          <AddTodo todos={todos} setTodos={setTodos}></AddTodo>
        </div>
        <div className="w-full">
          <ViewTodo todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
