import { useState } from "react";

export const SelectOption = () => {
  const initialData = [
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
  const [data, setData] = useState(initialData);
  const [details, setDetails] = useState({ id: 1, price: "" });

  const updatePrice = (id, price) => {
    if (price !== "") {
      setData(
        data.map((item) =>
          item.id === Number(id) ? { ...item, price: price } : item
        )
      );
    }
    setDetails({ id: 1, price: "" });
  };

  return (
    <div>
      <h2>Product Type</h2>
      <select
        name="ids"
        onChange={(e) => setDetails({ ...details, id: e.target.value })}
      >
        {data.map((option) => (
          <option key={option.id} value={option.id}>
            {option.item}{" "}
          </option>
        ))}
      </select>
      <h2>update price</h2>
      <input
        value={details.price}
        onChange={(e) => setDetails({ ...details, price: e.target.value })}
      ></input>
      <button onClick={() => updatePrice(details.id, details.price)}>
        Submit
      </button>
      <ol>
        {data.map((ele) => {
          return (
            <li key={ele.id}>
              {" "}
              {ele.item} ${ele.price}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
