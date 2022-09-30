import { useState } from "react";

export const Disablesubmit = () => {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <div>
      <h4>enter password</h4>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <h4>Re-enter password</h4>
      <input
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
      ></input>
      <div>
        <button disabled={password === checkPassword ? false : true}>
          Click
        </button>
      </div>
    </div>
  );
};
