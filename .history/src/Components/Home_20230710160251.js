import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [time,setTime] = useState()
  const [date,setDate] = useState()
  let currTime = new Date().toLocaleTimeString()
  let currDate = new Date().toLocaleDateString()


  const getTime = ()=>{
  let currTime = new Date().toLocaleTimeString()
    setTime(currTime)
  }

  const getDate = ()=>{
  let currDate = new Date().toLocaleDateString()
    setDate(currDate)
  }
  setInterval(getTime,1000)
  return (
    <div>
      <div className="boxClass">
        <h1
          style={{
            color: "white",
            position: "absolute",
            bottom: "35vh",
            marginLeft: "10vh",
            opacity: "0.3",
            fontFamily: "Stalemate",
            fontSize: "10vh",
          }}
        >
          Hello,This is Mohit here!
          <h2 style={{paddingRight:"5px"}}>{currTime}</h2>
        </h1>
        
      </div>
    </div>
  );
}
