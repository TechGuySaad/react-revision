import React from "react";

const P13 = ({ todos }) => {
  return (
    <div>
      Hi
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}> {todo.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default P13;
