import { useState } from "react";

export const DisplayHelloHi = () => {
  const [name, setName] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const nameEvenOdd = () => {
    if (name.length > 0) {
      setShowMsg(true);
    }
  };
  return (
    <div>
      <h3>enter your name</h3>
      <input
        type="name"
        placeholder="enter name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setShowMsg(false);
        }}
      ></input>
      <button onClick={() => nameEvenOdd()}>show welcome message</button>
      {showMsg &&
        (name.length % 2 === 0 ? <p>hello {name}</p> : <p>hi {name}</p>)}
    </div>
  );
};
