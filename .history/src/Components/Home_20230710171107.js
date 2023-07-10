import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const getTime = () => {
    let currTime = new Date().toLocaleTimeString();
    setTime(currTime);
    let currDate = new Date().toLocaleDateString();
    setDate(currDate);
  };

  useEffect(() => {
    setInterval(getTime);
  },[]);
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
          }} className
        >
          Hello,This is Mohit here!
          <h2 style={{ paddingRight: "5px" }}>
            Time : {time}&nbsp;
            Date : {date}
          </h2>
        </h1>
      </div>
    </div>
  );
}
