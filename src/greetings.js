import React from "react";

function Greeting() {
  const customer_name = "Jonathan";
  const hour = new Date().getHours(); 
  const greetingMsg = 
    hour < 12 
      ? "Good Morning" 
      : hour < 17 
        ? "Good Afternoon" 
        : "Good Evening"; //

  return (
    <div>
      <h1>{greetingMsg}</h1>
      <p>Welcome to our online store, {customer_name}!</p>
    </div>
  );
}

export default Greeting;
