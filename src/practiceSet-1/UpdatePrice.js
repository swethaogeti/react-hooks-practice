import { useState } from "react";

export const UpdatePrice = () => {
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
  const [details, setDetails] = useState({ id: null, price: null });

  const updatePrice = (id, price) => {
    if (id !== "" && price !== "") {
      setData(
        data.map((item) =>
          item.id === Number(id) ? { ...item, price: price } : item
        )
      );
    }
    setDetails({ id: "", price: "" });
  };
  return (
    <div>
      <h4>enter id</h4>
      <input
        value={details.id}
        placeholder="enter id"
        onChange={(e) => setDetails({ ...details, id: e.target.value })}
      ></input>
      <h4>enter price to update</h4>
      <input
        value={details.price}
        placeholder="enter price"
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
