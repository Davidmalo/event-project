import React from 'react'
import "../css/CollegeEvents.css"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"  
import img6 from "../assets/img6.jpeg"


export default function CollegeEvents() {
  return (
    <div>
        <div className='title'>
            <h1 style={{marginRight: "10px"}}>Checkout your</h1>
            <h1 style={{color:"#6f42c1", marginRight: "10px"}}>Colleges events</h1>
            <h1>now!!!</h1>
        </div>
        <div className='images d-flex justify-content-evenly'>
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
        </div>
        <div className='opt d-flex'>
        <div className='opt-title d-flex'>
         <h1 style={{color:"#6f42c1", marginRight: "10px"}}>Colleges</h1>
         <h1>near you</h1>
       </div>

        <div className='opt-select'>
        <select>
              <option >WeekDays</option>
          </select>
          <select>
              <option >Event-type</option>
          </select>
          <select>
              <option >Any Category</option>
          </select>
        </div>      

        </div>
    </div>
  )
}
