// SO here is the app.jsx file for slot machine where we just check if the all three emojis are same then outut they are same 
// else output they are diffrerent 


/*import react from "react";
import "./index.css";

const Slotm = (props) => {
  console.log("hi");
  
  if (props.x == props.y && props.y == props.z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <br/>
          <h1>SLOT IS MATCHING </h1>
          <br/>
          <hr/>
        </div>
      </>
    
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <br></br>
          <h1>SLOT IS NOT MATCHING </h1>
          <br/>
          <hr/>
        </div>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        {" "}
        Welcome to{" "}
        <span style={{ fontWeight: "bold" ,backgroundColor:"yellow" , fontStyle:"italic" }}>  🎰 Slot MAchine game  🎰 </span>{" "}
      </h1>
      <div className="slotMachine">
       
          <Slotm x= " 🌓 " y= "🏑 " z="🦒 "
          />
          <Slotm x="🔥" y ="🔥" z= "🔥"/>
          <Slotm z="😻 " x= "🦒 " y="🏑"/>
          <Slotm z= "😻 " x="😻 " y="😻 " />
        
      </div>
    </>
  );
};
export default App;
*/

// Here is the app.jsx file for the incrementing the value each time we click the button
// we will study about hooks earlier
import React, { useState } from "react";
import  ReactDOM  from "react-dom";

const App =()=>
{ 
  const [count,setcount]=useState(5); // here 5 is passed as the intital value 
// set count is the updates value
const increment =()=>{
   setcount(count+1);
}
  return (
    <>
    <div className="container">
      <h1 className="heading">{count}</h1>
      <button className="btn" onClick={increment}>CLICK ME </button>
    </div>
    </>
  );
}
export default App;