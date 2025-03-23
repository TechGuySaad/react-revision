import React from "react";

const P14 = ({ todos, setTodos }) => {
  const handleDelete = (e) => {
    const todoId = Number(e.target.value);
    // console.log(todoId);
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };
  return (
    <div>
      Hi
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li> {todo.text} </li>
              <button onClick={handleDelete} value={todo.id}>
                Delete Todo
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default P14;
