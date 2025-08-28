import React, { useState } from "react";

function CoffeeCard({ title, price, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center",
        padding: "15px",
        width: "200px",
      }}
    >
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button
        onClick={() => onAddToCart({ title, price })}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Coffee App</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <CoffeeCard title="Latte" price={6} onAddToCart={handleAddToCart} />
        <CoffeeCard title="Americano" price={7} onAddToCart={handleAddToCart} />
        <CoffeeCard title="Frappe" price={4} onAddToCart={handleAddToCart} />
        <CoffeeCard
          title="Cappuccino"
          price={10}
          onAddToCart={handleAddToCart}
        />
      </div>

      {/* CART */}
      <div style={{ marginTop: "30px" }}>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
