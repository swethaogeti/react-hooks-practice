import { useState } from "react";

export const SubcribeEmail = () => {
  const data = [
    {
      id: 1,
      mail: "tanay@neog.camp"
    },
    {
      id: 2,
      mail: "tanvi@neog.camp"
    },
    {
      id: 3,
      mail: "akanksha@neog.camp"
    },
    {
      id: 4,
      mail: "parul@neog.camp"
    },
    {
      id: 5,
      mail: "kishan@neog.camp"
    }
  ];
  const [input, setIput] = useState("");
  const [msg, setMsg] = useState(false);

  const checkSubcription = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      const mailExists = data.find((ele) => ele.mail === input);
      if (mailExists) {
        setMsg("already mail exists");
      } else {
        setMsg("subscribe now");
      }
    }
    setIput("");
  };
  return (
    <div>
      <h4>enter your email</h4>
      <input
        placeholder="enter email"
        value={input}
        onChange={(e) => setIput(e.target.value)}
      ></input>
      <button onClick={(e) => checkSubcription(e)}>subscribe</button>
      {msg && <h2>{msg}</h2>}
    </div>
  );
};
