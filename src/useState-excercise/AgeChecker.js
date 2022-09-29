import { useState } from "react";

export const AgeChecker = () => {
  const [age, setAge] = useState();
  return (
    <div>
      <h2>enter your age </h2>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      {age ? (
        age >= 18 ? (
          <p>Hey !! you are 18 and above</p>
        ) : (
          <p>Haha !! little one</p>
        )
      ) : (
        ""
      )}
    </div>
  );
};
