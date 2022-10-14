import { useState } from "react";

export const CarList = () => {
  const data = [
    {
      id: "c1",
      brand: "Toyota",
      make: "Corolla",
      model: "2007"
    },
    {
      id: "c2",
      brand: "Maruti Suzuki",
      make: "Omni",
      model: "2003"
    },
    {
      id: "c3",
      brand: "Hyundai",
      make: "Santro",
      model: "2005"
    }
  ];
  const [details, setDetails] = useState({
    id: "",
    brand: "",
    make: "",
    model: ""
  });
  const addCars = (e) => {
    e.preventDefault();
    if (details.brand !== "") {
      setCars([...cars, details]);
    }
    setDetails({ brand: "", make: "", model: "" });
  };
  const [cars, setCars] = useState(data);
  return (
    <div>
      <h3>enter car brand</h3>
      <input
        value={details.brand}
        onChange={(e) => setDetails({ ...details, brand: e.target.value })}
      ></input>
      <h3>enter car make</h3>
      <input
        value={details.make}
        onChange={(e) => setDetails({ ...details, make: e.target.value })}
      ></input>
      <h3>enter car model</h3>
      <input
        value={details.model}
        onChange={(e) => setDetails({ ...details, model: e.target.value })}
      ></input>
      <button onClick={(e) => addCars(e)}>add</button>
      {cars.map((item) => {
        return (
          <div style={{ display: "flex" }}>
            <h3>{item.brand}/ </h3>
            <h4>{item.make}/</h4>
            <h4>{item.model}</h4>
          </div>
        );
      })}
    </div>
  );
};
