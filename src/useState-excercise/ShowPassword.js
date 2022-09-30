import { useState } from "react";

export const ShowPassword = () => {
  const [show, setShow] = useState("password");
  const [toggle, setToggle] = useState("show password");

  const toogleButton = () => {
    if (show === "password") {
      setShow("text");
      setToggle("hide password");
    } else {
      setShow("password");
      setToggle("show password");
    }
  };
  return (
    <div>
      <h4>show password</h4>
      <input type={show}></input>
      <button onClick={() => toogleButton()}>{toggle}</button>
    </div>
  );
};
