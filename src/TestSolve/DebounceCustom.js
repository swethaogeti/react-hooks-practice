import { useState } from "react";

export const DebounceCustom = () => {
  const [input, setInput] = useState();

  return (
    <div>
      <h1>Custom debounce</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button>enter</button>
    </div>
  );
};
