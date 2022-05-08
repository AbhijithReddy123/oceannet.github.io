import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import {Button} from 'react-bootstrap';
import Checkoutmodal from './Checkoutmodal';
import Checkoutformmodal from './Checkoutformmodal';
function Checkout() {

  function getplan (val) {
    setplandata(val.target.value)

  }
  function getrouter(val) {
    setrouterdata(val.target.value)
  }

    const[opencheckmodal, setopencheckmodal] = useState(null)
    const[opencheckformmodal, setcheckformmodal] = useState(null)
    const[plandata, setplandata] = useState(null)
    const[routerdata, setrouterdata] = useState(null)
  return (
    <div className='form-21'>
      <div className='form-2'>
        <label for='plan' className='plan'> Choose a plan </label>
        <br></br>


        <select name='plan' id='plan' className='plan-1' onChange={getplan}>
        <option value="choose a plan">choose a plan</option>
            <option value='Ocean Fibre'>Ocean Fibre</option>
            <option value='Ocean Fibre Max'>Ocean Fibre Max</option>
            <option value='Ocean Gamer Max'>Ocean Gamer Max</option>
            <option value='Ocean Business Fibre'>Ocean Business Fibre</option>
            <option value='VOIP/Cloud PBX'>VOIP/Cloud PBX</option>
        </select>
        <br></br>

        <h1 className='hardware'>Hardware</h1>

        <Button variant='danger' className='opencheckmodalbtn' onClick={() =>{setopencheckmodal(true);}}>Know about your preferences before choosing</Button>
       {opencheckmodal && <Checkoutmodal closecheckmodal={setopencheckmodal}/>}

        <br></br>

        <label for='Router' className='router'> Choose a compatible device to connect to out network </label>
        <br></br>
        <select name='Router' id='Router' className='router-1' onChange={getrouter}>
        <option value="choose a device">choose a device</option>
            <option value='Rental'>Rental</option>
            <option value='purchase'>Purchase</option>
            <option value='Supply my own'>Supply my owm</option>
        </select>
        <br></br>
        <div className='submit'>

        <button onClick={() => {setcheckformmodal(true);}}>Submit</button>
        {opencheckformmodal && <Checkoutformmodal plandata={plandata} routerdata={routerdata}/>}
        </div>
        </div>
       

      
    </div>
  )
}

export default Checkout
