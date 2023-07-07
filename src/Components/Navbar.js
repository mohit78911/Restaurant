import React, { useEffect } from 'react'
import "./Style.css"
import { NavLink } from 'react-router-dom';

export default function Navbar({menuData,setMenuData,menu}) {


    const filterItems = (select) => {
        const updateList = menu.filter((val) => {
          return val.category === select;
        });
        setMenuData(updateList);
      };
    

  return (
    <div>
         <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item foodbtn"
            onClick={() => filterItems("breakfast")}
             
          >
            BreakFast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItems("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItems("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItems("dinner")}
          >
            Dinner
          </button>
          <button
            className="btn-group__item"
            onClick={() => setMenuData(menu)}
          >
            All
          </button>
        </div>
      </nav>
    </div>
  )
}
