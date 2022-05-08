import React from 'react'
import FormModal from './FormModal'
import "./Modal.css"
import {useState} from 'react';
import FormModal2 from './FormModal2';
import{Link} from 'react-router-dom';
function Modal({closeModal}, ) {

  function getData (val){
SetData(val.target.value)
console.log(val.target.value)
}
  const[openFormModal, setopenFormModal] = useState(false);
  const[Data,SetData] = useState(null)
  return (

    


    <div className='modalbackground'>
      <div className='modalcontainer'>
          <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}>x</button>
          </div>
          <div className='title'>
              <h5>please Leave your home address </h5>
              <input type="text"  className="text" placeholder="enter your Home Address" onChange={getData} />
            
          </div>
          
          <div className='footer'>
              <button className='cancelbtn' onClick={() => closeModal(false)}>Cancel</button>
              <button className='openformbtn' onClick={() => {setopenFormModal(true);}}>Continue</button>
              {openFormModal && <FormModal2 data={Data} closeform={setopenFormModal}/>}
              <Link to={<FormModal/>}>
              <button>submit</button>
              </Link>
              </div> 
      </div>
    </div>
  )
}

export default Modal
