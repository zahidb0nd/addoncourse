import React from "react";

function Button({ type }) {
  const styles = {
    primary: { background: "blue", color: "white", padding: "10px" },
    secondary: { background: "gray", color: "white", padding: "10px" }
  };

  return (
    <div>
      <button style={styles[type]}>{type}Button</button>
    </div>>
  );
}

function Card({title,price}){

  return(
    <div style={border:"1px solid #ddd", padding:"10px",margin:"10px",borderRadius:"10px"}>
      <h3>{title}</h3>
      <p>Price : $ {price}</p>
      <button style={{background:"green",color:"white"}}></button>

    </div>
  )
}

function App() {
  return (
    <div>
      <Button type="primary" />
      <Button type="secondary" />
    </div>
  );
}

export default App;
