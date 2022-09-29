import { useState } from "react";

export const TwitterCharCount = () => {
  const [count, setCount] = useState("");

  return (
    <div>
      <h3>Twitter Post counter</h3>
      <textarea
        style={{ width: "400px", height: "100px" }}
        value={count}
        placeholder="write here"
        onChange={(e) => setCount(e.target.value)}
      ></textarea>

      {count.length > 0 && count.length < 100 ? (
        <p>{100 - count.length}</p>
      ) : (
        <p style={{ color: "red" }}>-0</p>
      )}
    </div>
  );
};
