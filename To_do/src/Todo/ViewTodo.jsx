import React from 'react'

export const ViewTodo = ({todos, setTodos}) => {
    const DeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id)); 
    }

    const UpdateTodo = (id) => {
        const new_data = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                 status: !todo.status
                }
            }
            return todo
        })
        setTodos(new_data)
        
       
           
        }
            
    
    
  return (
    <>
      <div className="columns-3 bg-green-600 p-2">
        <p className="font-bold text-white"> Todo Name</p>
        <p className="font-bold text-white">Todo Status</p>
        <p className="font-bold text-white">Todo Actions</p>
      </div>
      {todos.map((todo, index) => (
        <div className="columns-3 bg-slate-400 p-2">
          <p className="font-bold text-gray-700"> {todo.title}</p>
          <p className="font-bold text-gray-700">
            {todo.status ? "Completed" : "Not Completed"}
          </p>
          <p className="font-bold text-gray-700">
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => DeleteTodo(todo.id)}
                className="bg-red-600  text-xs rounded-full p-1 text-white"
              >
                delete
              </button>
              <button
                onClick={() => UpdateTodo(todo.id)}
                className="bg-green-600  text-xs rounded-full p-1 text-white"
              >
                complete
              </button>
            </div>
          </p>
        </div>
      ))}
    </>
  );
}