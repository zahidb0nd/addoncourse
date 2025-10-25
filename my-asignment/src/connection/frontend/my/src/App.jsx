import React, { useEffect, useState } from "react";

//useState -  Concept variable : To Store Dynamically values at the same time

//useEffect - Is To fetch DATA from API

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((response) => response.json())

      .then((data) => setProducts(data));
  }, []);

  //HTML Code - Inside return (Html)

  return (
    <div>
      <h1>Hello Guys</h1>

      <p>This is Sample React</p>

      <button>Login</button>

      <h2>Product List</h2>
       <ul>
          {products.map(abc =>(
            <li key = {abc.id}>
                 {abc.name}  -- $ {abc.price}
            </li>

          ))}
        </ul>


    
      
  );
}

export default App;
