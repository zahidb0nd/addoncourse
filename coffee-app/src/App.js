import React from "react"

function Button({type}){

  const styles = {

    primary: { background:"blue",color:"white",padding:"10px"},

    secondary:{ background:"grey",color:"black",padding:"10px"}

  }

   

  return(

    <div>

      <button style={styles[type]}>{type}Button</button>

    </div>

  )

}

 

function Card({title,price}){

  return(

    <div style={{background:"red",    border:"1px solid #ddd", padding:"10px",margin:"10px",borderRadius:"10px"}}>

     <h3>{title}</h3>

     <p>Price : $ {price}</p>

     <button style={{background:"green",color:"white"}}>Buy Now</button>

    </div>

  )

}

 

function ResponsiveBox(){

  return(

    <div style={ {width:"80%",margin:"auto",padding:"20px",

      background:"lightblue"

    }}>

      <h2>i am Resposnive</h2>

      <p>Resize the Screen</p>

    </div>

  )

}

 

function App(){

  return(

    <div>

    <Button type="primary" />

    <Button type="secondary" />

    <Card title="Latte" price="4" />

    <ResponsiveBox />

    </div>

   );

}
export default App;



