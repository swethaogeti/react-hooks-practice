import { useState } from "react";

export const MirrorIt = () => {
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);
  const [output, setOutput] = useState("");
  const mirrorIt = () => {
    setActive(true);
    const reverse = user.split("").reverse().join("");
    setOutput(reverse);
    setUser("");
  };
  return (
    <div>
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="enter name"
      ></input>
      {active && <p>{output}</p>}
      <button onClick={() => mirrorIt()}>Mirror it</button>
    </div>
  );
};
