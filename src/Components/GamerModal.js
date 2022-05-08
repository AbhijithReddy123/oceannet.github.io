import React from 'react'
import {useState} from 'react';
import FormModal from './FormModal';


function GamerModal({closegamemodal}) {

  const[openformmodal, setopenformmodal]= useState(false);
  return (
    <div>
        <div className='closebutton'>
        <button onClick={() => closegamemodal(false)}>x</button>
        </div>
     <label>enter your home addresss</label>
     <input type="text"/> 
     
     <select name='plan' id='plan' className='plan-1' >
        <option value="choose a plan">choose a plan</option>
            <option value='Ocean Fibre'>Ocean Fibre</option>
            <option value='Ocean Fibre Max'>Ocean Fibre Max</option>
            <option value='Ocean Gamer Max'>Ocean Gamer Max</option>
            <option value='Ocean Business Fibre'>Ocean Business Fibre</option>
            <option value='VOIP/Cloud PBX'>VOIP/Cloud PBX</option>
        </select>

        <select name='Router' id='Router' className='router-1' >
        <option value="choose a device">choose a device</option>
            <option value='Rental'>Rental</option>
            <option value='purchase'>Purchase</option>
            <option value='Supply my own'>Supply my owm</option>
        </select>

        <button onClick={()=> {setopenformmodal(true)}}>submit</button>
         {openformmodal && <FormModal closeform={setopenformmodal}/> }
    </div>
  )
}

export default GamerModal
