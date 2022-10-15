import { useState } from "react";

export const RemoveItem = () => {
  const data = [
    {
      id: 1,
      item: "JavaScript"
    },
    {
      id: 2,
      item: "Python"
    },
    {
      id: 3,
      item: "Scala"
    },
    {
      id: 4,
      item: "Solidity"
    },
    {
      id: 5,
      item: "C++"
    }
  ];

  const [langList, setLangList] = useState(data);

  const removeItem = (id) => {
    setLangList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>list if languages</h2>
      {langList.length > 0 ? (
        langList?.map((ele) => {
          return (
            <div key={ele.id} style={{ display: "flex", alignItems: "center" }}>
              <h4>{ele.item}</h4>
              <button
                style={{ padding: "2px", height: "1.4rem" }}
                onClick={() => removeItem(ele.id)}
              >
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <h2>empty list</h2>
      )}
    </div>
  );
};
