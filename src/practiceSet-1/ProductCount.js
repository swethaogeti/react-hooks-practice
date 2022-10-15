import { useEffect, useState } from "react";

export const ProductCount = () => {
  const data = [
    {
      id: 1,
      item: "shoes",
      price: 100,
      quantity: 1
    },
    {
      id: 2,
      item: "jacket",
      price: 400,
      quantity: 1
    },
    {
      id: 3,
      item: "hat",
      price: 50,
      quantity: 1
    },
    {
      id: 4,
      item: "sunglasses",
      price: 250,
      quantity: 1
    },
    {
      id: 5,
      item: "gloves",
      price: 300,
      quantity: 1
    }
  ];
  const [dataItems, setData] = useState(data);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      dataItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
  }, [dataItems]);
  const increment = (ele) => {
    setData(
      dataItems.map((item) =>
        item.id === ele.id ? { ...item, quantity: ele.quantity + 1 } : item
      )
    );
  };

  const decrement = (ele) => {
    setData(
      dataItems
        .map((item) =>
          item.id === ele.id ? { ...item, quantity: ele.quantity - 1 } : item
        )
        .filter((item) => item.quantity !== 0)
    );
  };
  return (
    <div>
      <h2>Total- {total}</h2>
      {dataItems.map((item) => {
        return (
          <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
            <p>{item.item}-</p>
            <p>({item.price})$</p>
            <button onClick={() => increment(item)}>+</button>
            <span>{item.quantity}</span>{" "}
            <button onClick={() => decrement(item)}>-</button>
          </div>
        );
      })}
    </div>
  );
};
