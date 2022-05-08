import React from 'react'
import './Navbar.css'
function FormModal2(props) {
  return (
    <div>
        <h5> your address</h5>
        <p>{props.data}</p>

        <label>Upload file</label>
        <input type="file"/>
        ----------------
        <h6 className='summary'>Monthly plan</h6>
        <p className='summary-1'>$65.50</p>
        ----------------
        <div className='s-1'>
            <h6 className='summary'>Connection fee </h6>
            <p className='summary-1'>$29</p>
            
            <div className='s-2'>
            <h6 className='summary'>First Month plan</h6>
            <p className='summary-1'>65.50</p>
            </div>
            -----------------------------------
        </div>
      
    </div>
  )
}

export default FormModal2

