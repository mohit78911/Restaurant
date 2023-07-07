import React, { useState } from "react";
import "./Style.css";
import menu from "./MenuApi";
import Menu from "./Menu";
import Navbar from "./Navbar";

export default function Restaurant() {
  const [menuData, setMenuData] = useState(menu);
console.log(menuData)
 
  return (
    <div>
     <Navbar menuData={menuData} setMenuData={setMenuData} menu={menu}/>
      <Menu menuData={menuData} />
    </div>
  );
}
