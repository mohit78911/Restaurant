import React, { useState } from 'react'
import "./Style.css"
import { useDispatch } from 'react-redux'
import { addItem } from '../store/slice/CartSlice'
export default function Menu({menuData}) {
    console.log(menuData)
    const [added,setAdded] = useState(false)

    const dispatch = useDispatch()

    const AddToCarthandle = (value)=>{
      dispatch(addItem(value))
      setAdded(true)
      
      setTimeout(()=>{
        setAdded(false)
      },3000)
    }

  return (
    <div>
        <section className='main-card--cointainer '>
        {menuData.map((value,i) => (
        <div className="card-container" key={i}>
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle">{value.id}</span>
              <span className="card-author subtle">{value.category}</span>
              <h2 className="card-title">{value.name}</h2>
              <span className="card-description subtle">
                {value.description}
              </span>
              <div className="card-read">Read</div>
            </div>
            <img src={value.image} alt="" className="card-media" />
            <span className="card-tag subtle " onClick={()=>AddToCarthandle(value.name)}>{added? "Added" : "ADD TO CART"}</span>
          </div>
        </div>
      ))}
    </section>
    </div>
  )
}
