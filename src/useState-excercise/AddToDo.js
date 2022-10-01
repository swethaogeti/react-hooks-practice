import { useState } from "react";
import { v4 as uuid } from "uuid";
export const AddToDo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handletoDos = () => {
    if (todo !== "") {
      setTodos([...todos, { id: uuid(), name: todo, isComplete: false }]);
    }
    setTodo("");
  };

  const handleComplete = (todo) => {
    setTodos((todos) =>
      todos.map((currentTodo) =>
        currentTodo.id === todo.id
          ? { ...currentTodo, isComplete: !currentTodo.isComplete }
          : currentTodo
      )
    );
  };

  return (
    <div>
      <h1>Add to do</h1>
      <input
        placeholder="enter a todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>

      <button onClick={() => handletoDos()}>Add</button>
      {todos?.map((item) => {
        return (
          <p
            key={uuid()}
            style={{
              textDecoration: item.isComplete ? "line-through" : "none",

              cursor: "pointer"
            }}
            onClick={() => handleComplete(item)}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
};
