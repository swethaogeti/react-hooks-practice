import { useState } from "react";
import { v4 as uuid } from "uuid";
export const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      _id: 1,
      title: "Full-Rim Cat-Eye Sunglasses",
      brand: "SKECHERS",
      image:
        "https://assets.ajio.com/medias/sys_master/root/hce/h70/14162255708190/skechers-blue-cat-eye-full-rim-cat-eye-sunglasses.jpg",
      price: "1500",
      discount: "50",
      total_price: "3000",
      category: "shades",
      rating: 4,
      inStock: true,
      fastDelivery: true,
      trending: true,
      amount: 1
    },
    {
      _id: 2,
      title: "Mirrored Full-Rim Round Sunglasses",
      brand: "TOMMY HILFIGER",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20201027/CU0r/5f983e55f997dd8c837907bc/tommy-hilfiger-pink-cat-eye-th-2545-mirrored-cateye-sunglasses.jpg",
      price: "1000",
      discount: "50",
      total_price: "2000",
      category: "shades",
      rating: 5,
      inStock: true,
      fastDelivery: false,
      trending: false,
      amount: 1
    },
    {
      _id: 3,
      title: "Printed Full-Rim Wayfarers",
      brand: "FOSSIL",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210213/Ee0P/602712e0aeb2696981654715/fossil-black-wayfarers-202768-printed-full-rim-wayfarers.jpg",
      price: "2000",
      discount: "50",
      total_price: "4000",
      category: "shades",
      rating: 4,
      inStock: true,
      fastDelivery: false,
      trending: false,
      amount: 1
    },
    {
      _id: 4,
      title: "Full-Rim Oval Sunglasses",
      brand: "FOSSIL",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210213/qoFr/6027108af997dd5c40f02cfc/fossil-brown-oval-203335-full-rim-oval-sunglasses.jpg",
      price: "1814",
      discount: "45",
      total_price: "3299",
      category: "shades",
      rating: 4,
      inStock: true,
      fastDelivery: false,
      trending: false,
      amount: 1
    },
    {
      _id: 5,
      title: "Full-Rim Cat Eye Sunglasses shades",
      brand: "FRENCH CONNECTION",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20201027/fhwt/5f9843bef997dd8c837937f4/french-connection-golden-cat-eye-fc-7432-c1-full-rim-cat-eye-sunglasses.jpg",
      price: "1349",
      discount: "55",
      total_price: "2999",
      category: "shades",
      rating: 4,
      inStock: true,
      fastDelivery: true,
      trending: false,
      amount: 1
    },
    {
      _id: 6,
      brand: "DRESSBERRY",
      title: "Black Embellished Block Mules",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13927592/2022/3/22/567c7606-cc06-4948-8f18-37e1c1c9b3be1647932070475-DressBerry-Women-Heels-2031647932070189-1.jpg",
      price: "1000",
      discount: "50",
      total_price: "1999",
      category: "heels",
      rating: 4,
      inStock: true,
      fastDelivery: false,
      trending: false,
      amount: 1
    }
  ];

  const addtoCart = (product) => {
    console.log(product._id);
    const isInCart = cart?.find((cartItem) => cartItem._id === product._id);

    if (isInCart) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem._id === isInCart._id
            ? { ...cartItem, amount: cartItem.amount + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <h3>Add To Cart</h3>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((item) => {
          return (
            <div
              key={item._id}
              style={{
                margin: "5px",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <img src={item.image} style={{ width: "180px" }} alt="img"></img>
              <button onClick={() => addtoCart(item)}>Add to cart</button>
            </div>
          );
        })}
      </div>
      <h1>Cart</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cart?.map((item) => {
          return (
            <div
              key={item._id}
              style={{
                margin: "5px",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <img src={item.image} style={{ width: "180px" }} alt="img"></img>
              <p>AMOUNT:{item.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
