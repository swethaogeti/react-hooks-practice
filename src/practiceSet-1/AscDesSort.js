import { useEffect, useState } from "react";

export const AscDesSort = () => {
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
  const [products, setProducts] = useState(data);

  const asecSort = () => {
    setProducts([...products].sort((a, b) => a.price - b.price));
  };
  const descSort = () => {
    setProducts([...products].sort((a, b) => b.price - a.price));
  };
  return (
    <div>
      <button onClick={() => asecSort()}>sort asc</button>
      <button onClick={() => descSort()}>sort desc</button>
      <ol>
        {products.map((ele) => {
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
