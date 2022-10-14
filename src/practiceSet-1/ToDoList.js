import { useState } from "react";

export const ToDOList = () => {
  const todosList = [
    {
      id: 1,
      title: "NeoG assignments",
      completed: false
    },
    {
      id: 2,
      title: "Pair programming session",
      completed: true
    },
    {
      id: 3,
      title: "Project submission",
      completed: false
    },
    {
      id: 4,
      title: "Coding practice",
      completed: true
    }
  ];

  const [todos, setTodos] = useState(todosList);

  const showCompleted = () => {
    return setTodos(todosList.filter((todo) => todo.completed));
  };

  const showInCompleted = () => {
    return setTodos(todosList.filter((todo) => !todo.completed));
  };
  const showAll = () => {
    return setTodos(todosList);
  };
  return (
    <div>
      <button onClick={() => showCompleted()}>Show completed todos</button>
      <button onClick={() => showInCompleted()}>show incompleted todos</button>
      <button onClick={() => showAll()}>Show all</button>
      {todos.map((todo) => {
        return (
          <div style={{ display: "flex" }}>
            <h4>{todo.title}</h4>
            <p>{todo.completed ? "completed✅" : "inprogress❌"} </p>
          </div>
        );
      })}
    </div>
  );
};
