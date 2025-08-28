// import React from "react"

// function Button({type}){

//   const styles = {
//     primary: { background:"blue",color:"white",padding:"10px"},
//     secondary:{ background:"grey",color:"black",padding:"10px"}
//   }

//   return(
//     <div>
//       <button style={styles[type]}>{type}Button</button>
//     </div>
//   )

// }

// function Card({title,price}){

//   return(
//     <div style={{background:"red",    border:"1px solid #ddd", padding:"10px",margin:"10px",borderRadius:"10px"}}>
//      <h3>{title}</h3>
//      <p>Price : $ {price}</p>
//      <button style={{background:"green",color:"white"}}>Buy Now</button>
//     </div>
//   )

// }

// function ResponsiveBox(){
//   return(
//     <div style={ {width:"80%",margin:"auto",padding:"20px",
//       background:"lightblue"
//     }}>
//       <h2>i am Resposnive</h2>
//       <p>Resize the Screen</p>
//     </div>
//   )
// }

// function App(){

//   return(
//     <div>
//     <Button type="primary" />
//     <Button type="secondary" />
//     <Card title="Latte" price="4" />
//     <ResponsiveBox />
//     </div>
//    );
// }

// export default App

import React, { useState } from "react";

function CoffeCard({ title, price, onAdd }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        borderRadius: "10px",
        width: "200px",
        textAlign: "center",
        padding: "15px",
      }}
    >
      <h3>{title}</h3>
      <p>Price : ${price}</p>

      <button
        onClick={() => onAdd(title, price)}
        style={{
          background: "green",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add To cart
      </button>
    </div>
  );
}

function App() {
  const [cart, setCard] = useState([]);

  const addToCart = (title, price) => {
    setCard([...cart, { title, price }]);
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <h1>Coffe App☕</h1>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <CoffeCard title="Latte" price={4} onAdd={addToCart} />
        <CoffeCard title="Esperro" price={3} onAdd={addToCart} />
        <CoffeCard title="Hot choclate" price={5} onAdd={addToCart} />
      </div>

      {/* CART */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "8px",
          maxWidth: "300px",
        }}
      >
        <h2>Cart🛒</h2>
        {cart.length === 0 ? (
          <p>No Items yet</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - $ {item.price}
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => alert("Order Placed")}>ChecKout</button>
      </div>
    </div>
  );
}

export default App;
