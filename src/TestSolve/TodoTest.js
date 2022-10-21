import { useState } from "react";
import { v4 as uuid } from "uuid";

// Pasting again for folks who just joined: implement a to-do list component where each todo has a text and a status value.
// If the status is true, then strike through the text
// and when clicked on the delete button that particular todo must be deleted
// implement delete customization where if the checkbox is checked you need to show the delete button for each todo and if not checked delete buttons should not be shown beside each todo.
// And there should be a three-color choice for each todo suppose from three if the user selects red, the background of that todo must be turned to red

export function TodoTest() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: uuid(),
          name: todo,
          status: false,
          isChecked: false,
          color: "none"
        }
      ]);
    }
    setTodo("");
  };

  const handleIsComplete = (todo) => {
    setTodos((todos) =>
      todos.map((currentTodo) =>
        currentTodo.id === todo.id
          ? { ...currentTodo, status: !currentTodo.status }
          : currentTodo
      )
    );
  };

  const handleOnChange = (todo) => {
    // setIsChecked(!isChecked);

    setTodos((todos) =>
      todos.map((currentTodo) =>
        currentTodo.id === todo.id
          ? { ...currentTodo, isChecked: !currentTodo.isChecked }
          : currentTodo
      )
    );
  };

  const handleDelete = (ele) => {
    setTodos((todos) => todos.filter((item) => item.id !== ele.id));
  };
  const handlered = (todo) => {
    console.log(todo);
    setTodos((todos) =>
      todos.map((currentTodo) =>
        currentTodo.id === todo.id
          ? { ...currentTodo, color: "red" }
          : currentTodo
      )
    );
  };

  const handleGreen = (todo) => {
    setTodos((todos) =>
      todos.map((currentTodo) =>
        currentTodo.id === todo.id
          ? { ...currentTodo, color: "green" }
          : currentTodo
      )
    );
  };

  const handleBlue = (todo) => {
    setTodos((todos) =>
      todos.map((currentTodo) =>
        currentTodo.id === todo.id
          ? { ...currentTodo, color: "blue" }
          : currentTodo
      )
    );
  };
  return (
    <div>
      <h1> TODO</h1>
      <input
        type="text"
        placeholder="enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={() => addTodo()}>ADD Todo</button>

      {todos?.map((item) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleOnChange(item)}
            ></input>
            <p
              key={uuid()}
              style={{
                textDecoration: item.status ? "line-through" : "none",
                cursor: "pointer",
                backgroundColor: item.color
              }}
              onClick={() => handleIsComplete(item)}
            >
              {item.name}
            </p>
            {item.isChecked && (
              <button
                style={{
                  padding: "2px",
                  height: "1.5rem",
                  cursor: "pointer"
                }}
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            )}

            <button onClick={() => handlered(item)}>red</button>
            <button onClick={() => handleGreen(item)}>green</button>
            <button onClick={() => handleBlue(item)}>blue</button>
          </div>
        );
      })}
    </div>
  );
}
