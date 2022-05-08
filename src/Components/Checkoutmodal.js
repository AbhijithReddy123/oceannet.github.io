import React from 'react'
import './Navbar.css'
function Checkoutmodal({closecheckmodal}) {
  return (
    <div>
        <button onClick={() => closecheckmodal(false)}>x</button>
        <div className='data-1'>
      <h1>Rental</h1>
      <h2>Huawei Rental Router</h2>
      <p> Wifi 4 Ethernet Ports</p>
      <h1>Purchase</h1>
      <h2>Hueawei DG8245V purchase</h2>
      <p>Wifi 4 Ethernet Ports</p>
      <h1>Supply my own</h1>
      <h2>Already  have a broadband??</h2>
      <p>Note that our ability to support third-party hardware is limited, on 
          best effort basis. We recommend choosing the Oceannet broadband Router, 
          which we will pre configure for you.
      </p>
      </div>
    </div>
  )
}

export default Checkoutmodal
