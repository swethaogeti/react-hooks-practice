import { useState } from "react";

export const PasswordMatcher = () => {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>Password Matcher</h1>
      <span>Enter password</span>
      <input
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <span>ReEnter password</span>
      <input
        placeholder="ReEnter password"
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
      ></input>

      {password && checkPassword && password !== checkPassword && (
        <p style={{ color: "red" }}>Password should match</p>
      )}
    </div>
  );
};
