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
  const [deletedList, setDeletedList] = useState([]);
  const removeItem = (ele) => {
    setLangList((prev) => prev.filter((item) => item.id !== ele.id));
    setDeletedList((prev) => [ele, ...prev]);
  };
  console.log(deletedList);
  const undoRemove = () => {
    setLangList((prev) => [...prev, deletedList[0]]);
    setDeletedList((prevDeleted) => prevDeleted.slice(1));
  };

  return (
    <div>
      <h2>list if languages</h2>
      {deletedList.length > 0 && (
        <button onClick={() => undoRemove()}>Undo</button>
      )}
      {langList.length > 0 ? (
        langList?.map((ele) => {
          return (
            <div key={ele.id} style={{ display: "flex", alignItems: "center" }}>
              <h4>{ele.item}</h4>
              <button
                style={{ padding: "2px", height: "1.4rem" }}
                onClick={() => removeItem(ele)}
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
