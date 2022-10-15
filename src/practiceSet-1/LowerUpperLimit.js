import { useState } from "react";

export const LowerUpperLimit = () => {
  const data = [
    {
      id: 1,
      item: "shoes",
      price: 100
    },
    {
      id: 2,
      item: "jacket",
      price: 400
    },
    {
      id: 3,
      item: "hat",
      price: 50
    },
    {
      id: 4,
      item: "sunglasses",
      price: 250
    },
    {
      id: 5,
      item: "gloves",
      price: 300
    }
  ];

  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);

  return (
    <div>
      <h4>Lower Limit</h4>
      <input
        type="number"
        value={lower}
        onChange={(e) => setLower(e.target.value)}
      ></input>
      <h4>Upper Limit</h4>
      <input
        type="number"
        value={upper}
        onChange={(e) => setUpper(e.target.value)}
      ></input>

      {data
        .filter((item) => {
          return item.price > lower && item.price < upper;
        })
        .map((item) => {
          return (
            <div
              key={item.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <p>{item.item}-</p>
              <p>({item.price})$</p>
              <button>+</button>
              <span>4</span> <button>-</button>
            </div>
          );
        })}
    </div>
  );
};
