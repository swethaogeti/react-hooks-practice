export const ClothingStock = () => {
  const clothingStock = [
    {
      id: "0a1",
      color: "blue",
      category: "men shirt",
      item: "Regular Fit Men Shirt",
      inStock: true
    },
    {
      id: "0a2",
      color: "black",
      category: "women top",
      item: "Regular Fit Women Top",
      inStock: true
    },
    {
      id: "0a3",
      color: "grey",
      category: "men shirt",
      item: "Slim Fit Men Shirt",
      inStock: false
    },
    {
      id: "0a4",
      color: "grey",
      category: "men tshirt",
      item: "Slim Fit Men Tshirt",
      inStock: false
    },
    {
      id: "0a5",
      color: "red",
      category: "women top",
      item: "Slim Fit Women Top",
      inStock: true
    },
    {
      id: "0a6",
      color: "yellow",
      category: "men shirt",
      item: "Casual Fit Men Shirt",
      inStock: true
    },
    {
      id: "0a7",
      color: "orange",
      category: "men shirt",
      item: "Straight Fit Men Shirt",
      inStock: true
    },
    {
      id: "0a8",
      color: "orange",
      category: "women top",
      item: "Casual Fit Women Top",
      inStock: false
    }
  ];

  // 1a. Console all the different colours available for men's shirts.

  // clothingStock.filter((item) =>
  //   item.category === "men shirt" ? console.log(item.color) : ""
  // );
  clothingStock.forEach(
    (item) => item.category === "men shirt" && console.log(item.color)
  );

  // 1b. Console all the different colours available for men shirt which are currently in stock.

  clothingStock.forEach(
    (item) =>
      item.category === "men shirt" &&
      item.inStock === true &&
      console.log(item.color)
  );

  // 1c: Console an array which only contains the elements which are in stock.
  const inStock = clothingStock.filter((item) => item.inStock === true);
  console.log(inStock);
  return (
    <div>
      <h1>Console all the different colours available for men's shirts.</h1>
    </div>
  );
};
