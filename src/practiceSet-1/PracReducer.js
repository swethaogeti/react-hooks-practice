export const PracReducer = () => {
  const arr = [
    { category: "men", color: "blue", quantity: 5, item: "jeans" },
    { category: "women", color: "blue", quantity: 5, item: "jeans" },
    { category: "women", color: "blue", quantity: 6, item: "tshirt" },
    { category: "men", color: "blue", quantity: 2, item: "tshirt" }
  ];

  // Expected Output:
  // {
  // 	jeansQuantity: 10,
  // 	tshirtQuantity: 8
  // }

  const storeData = {
    women: {
      top: {
        id: "at12",
        availability: [
          { id: 1, color: "blue", quantity: 5, inStock: true },
          { id: 2, color: "black", quantity: 3, inStock: true }
        ]
      },
      jeans: {
        id: "aj12",
        availability: [
          { id: 3, color: "dark blue", quantity: 0, inStock: false },
          { id: 4, color: "dark blue", quantity: 5, inStock: true },
          { id: 5, color: "black", quantity: 5, inStock: true }
        ]
      },
      purse: {
        id: "ap12",
        availability: [
          { id: 6, color: "red", quantity: 5, inStock: true },
          { id: 7, color: "white", quantity: 0, inStock: false }
        ]
      }
    },
    men: {
      shirt: {
        id: "ms12",
        availability: [
          { id: 8, color: "yellow", quantity: 5, inStock: true },
          { id: 9, color: "black", quantity: 3, inStock: true }
        ]
      },
      jeans: {
        id: "mj12",
        availability: [
          { id: 10, color: "blue", quantity: 0, inStock: false },
          { id: 11, color: "black", quantity: 9, inStock: true }
        ]
      },
      wallet: {
        id: "mw12",
        availability: [
          { id: 12, color: "blue", quantity: 15, inStock: true },
          { id: 13, color: "black", quantity: 10, inStock: true }
        ]
      }
    }
  };

  const totalQty = arr.reduce(
    (acc, curr) => {
      const { quantity, item } = curr;
      if (item === "tshirt") {
        acc.jeansQty += quantity;
      } else {
        acc.tshirtQty += quantity;
      }
      return acc;
    },
    { jeansQty: 0, tshirtQty: 0 }
  );

  console.log(totalQty);

  // Find and console the quantity of dark blue women jeans in stock.

  const {
    women: {
      jeans: { availability }
    },
    men: {
      wallet: { availability: walletQty }
    }
  } = storeData;
  const jeansCount = availability.reduce((acc, curr) => {
    if (curr.color === "dark blue" && curr.inStock === true) {
      acc += curr.quantity;
    }
    return acc;
  }, 0);

  const walletCount = walletQty.reduce(
    (acc, curr) => {
      return {
        ...acc,
        menWalletQuantity: acc.menWalletQuantity + curr.quantity
      };
    },
    { menWalletQuantity: 0 }
  );
  console.log(jeansCount);
  console.log(walletCount);
  return <div>Reducer()</div>;
};
