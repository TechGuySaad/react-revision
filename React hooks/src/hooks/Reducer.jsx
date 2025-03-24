import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "DELETE_TODO":
      return state.filter((todo) => todo.id != action.id);
    case "ADD_TODO":
      return [...state, { ...action.todo }];

    case "COMPLETED_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isCompleted: true } : todo
      );
    case "UNDO_COMPLETED_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isCompleted: false } : todo
      );
    case "CLEAR_COMPLETED":
      return state.filter((todo) => todo.isCompleted !== true);

    default:
      return state;
  }
}

const Reducer = () => {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, task: "do this boss", isCompleted: false },
    { id: 2, task: "do that boss", isCompleted: false },
    { id: 3, task: "do everything boss", isCompleted: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = () => {
    const todo = { id: todos.length + 1, task: newTodo, isCompleted: false };
    dispatch({ type: "ADD_TODO", todo });
    setNewTodo("");
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "CLEAR_COMPLETED" });
        }}
      >
        Clear completed
      </button>
      <div>
        <input
          type="text"
          placeholder="enter new task"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button onClick={handleNewTodo}>Add New Task</button>
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="todo" style={{ display: "flex" }}>
            {todo.isCompleted ? (
              <p style={{ textDecoration: "line-through" }}>{todo.task}</p>
            ) : (
              <p>{todo.task}</p>
            )}

            <button
              onClick={() => {
                dispatch({ type: "DELETE_TODO", id: todo.id });
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                todo.isCompleted
                  ? dispatch({ type: "UNDO_COMPLETED_TODO", id: todo.id })
                  : dispatch({ type: "COMPLETED_TODO", id: todo.id });
              }}
            >
              {todo.isCompleted ? "Undo" : "Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Reducer;
