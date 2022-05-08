import React from 'react'
import "./Modal3.css"
function Modal3({closemodal}) {
  return (
    <div className='modalbackground-1'>
        <div className='modalContainer-1'>
            <div className='titleclosebtn-1'>
            <button onClick={() => closemodal(false)}>x</button>
            </div>
            <div className='title-1'>
            <h5> Residential Fibre 300   (12m Term) - $79.00</h5>
              <h5>Residential Fibre 300    (no Term) - $89.00</h5>
              <div>-----------------------------------</div>
            </div>
            <div className='body-1'>
            <p>One-off Charges - $0.00</p>
              <div>---------------------------------</div>
              <p>Free installation</p>
            </div>
            <div className='footer-1'>
                <button className='cancelbtn-1' onClick={() => closemodal(false)}>cancel</button>
                <button>continue</button>
            </div>
        </div>
     
    </div>
  )
}

export default Modal3
