import React from 'react'
import './Navbar.css'
function Checkoutformmodal(props) {
  return (
    <div className='formmodal'>
      <h1>plan</h1>
      <p>{props.plandata}</p>
      <h1>Router option</h1>
      <p>{props.routerdata}</p>
      
    </div>
  )
}

export default Checkoutformmodal
