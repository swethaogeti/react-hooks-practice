import { useState } from "react";
import { v4 as uuid } from "uuid";

export const StackTest = () => {
  //   Implement React component stack by replicating
  // all stack properties. Use input field to take
  // input and add button to push into stacks. implement pop,
  // peek, isempty, isfull, clear. On button clicks, it should show their respective outputs.
  const [input, setInput] = useState();
  const [stack, setStack] = useState(["pens", "paper", "books"]);
  const [element, setElement] = useState();
  const [stackLength, setStackLenght] = useState(5);
  const data = [];
  console.log(data);
  const add = () => {
    if (input !== "" && stack.length < stackLength) {
      stack.push(input);
      setElement(`pushed element ${input}`);
      setStack([...stack]);
    } else {
      setElement("stack is full");
    }
    setInput("");
  };

  const pop = () => {
    const popElement = stack.pop();
    setElement(`popped element ${popElement}`);
    setStack((todos) => todos.filter((item) => item !== popElement));
  };

  const peek = () => {
    const peekElemnt = stack[stack.length - 1];
    setElement(`peek element ${peekElemnt}`);
  };
  const isEmpty = () => {
    if (stack.length === 0) {
      setElement(`stack is empty`);
    } else {
      setElement(`stack is not empty`);
    }
  };

  const isFull = () => {
    if (stack.length === 10) {
      setElement(`stack is full`);
    } else {
      setElement(`stack is not full`);
    }
  };

  const clear = () => {
    setStack([]);
    setElement(`stack cleared`);
  };
  return (
    <div>
      <h3>Stack</h3>
      <p>{element}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={() => add()}>Add</button>
      <button onClick={() => pop()}>pop</button>
      <button onClick={() => peek()}>peek</button>
      <button onClick={() => isEmpty()}>IsEmpty</button>
      <button onClick={() => isFull()}>IsFull</button>
      <button onClick={() => clear()}>Clear</button>

      {stack.map((item) => {
        return (
          <div
            style={{
              border: "2px",
              backgroundColor: "",
              borderColor: "black"
            }}
          >
            <p key={uuid()}>{item}</p>
          </div>
        );
      })}
    </div>
  );
};
