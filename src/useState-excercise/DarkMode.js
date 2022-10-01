import { useState } from "react";

export const DarkMode = () => {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState({ textColor: "black", bgColor: "white" });

  const handleToggle = () => {
    if (toggle) {
      // setColor({ textColor: "black", bgColor: "white" });
      document.body.style.background = "white";
      setToggle(false);
    } else {
      // setColor({ textColor: "white", bgColor: "black" });
      document.body.style.background = "black";
      setToggle(true);
    }
  };
  return (
    <div style={{ color: toggle ? "white" : "black" }}>
      <button onClick={() => handleToggle()}>Toggle</button>
      <h1>Dark Mode</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};
