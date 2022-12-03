import React, { useState } from "react";

export const UseStateHook = () => {
  const [test, setTest] = useState(() => {
    console.log("runs once");
    return "sweety";
  });

  return (
    <div>
      <h1>{test}</h1>
    </div>
  );
};
