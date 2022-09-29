import { useState } from "react";

export const AddAndSub = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>+</button>
      <h3>{value}</h3>
      <button
        onClick={() => {
          value !== 0 && setValue(value - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
