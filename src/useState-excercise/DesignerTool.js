import { useState } from "react";

export const DesignerTool = () => {
  const [textSize, setTextSize] = useState(8);

  const increaseFont = () => {
    return setTextSize(textSize + 8);
  };
  const decreaseFont = () => {
    if (textSize > 8) {
      return setTextSize(textSize - 8);
    }
  };

  console.log(textSize);

  return (
    <div>
      <p style={{ fontSize: `${textSize}px` }}>
        "When you have a dream, you've got to grab it and never let go." ...
      </p>
      <button onClick={() => increaseFont()}>+ by 8px</button>
      <button onClick={() => decreaseFont()}>- by 8px</button>
    </div>
  );
};
