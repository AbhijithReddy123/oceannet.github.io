import React from 'react'
import {card, Row, Col, Button} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import{Offcanvas} from 'react-bootstrap';
import image43 from './../Components/assets/images/30mbps.png';

import image44 from './../Components/assets/images/car.png';

import image45 from './../Components/assets/images/300mbps.png';

import image46 from './../Components/assets/images/max.png';
import './Navbar.css'


import Modal from './Modal';
import Modal3 from './Modal3';
import GamerModal from './GamerModal';


function Pricetag () {
   const [openModal, setOpenModal] = useState(false);
   const[openModall, setopenModall]= useState(false);
   const[gameopenmodal, setgameopenmodal] = useState(false);
  
  return (
      <div className='p-3'>
    <div className='container text-center'>
      <h1 className='display-4 p-4'>Pricing</h1>
    </div>
    <div className='pricecard'>
    <div className='container text-center'>
       <div className='row'>
           <div className='col'>
           <div className='card'>
            <div className='card-header'>
            <h4 className='p-1'>Ocean Fibre</h4>
            </div>
            <div className='card-body p-2'>
                
      
        <h1 className='my-0 font-weight-normal'>$80<small className='text-muted'>/mo</small></h1>
        <div className='mt-3 mb-4'>
            <h6>We offer an amazing range of speed options to suit any home. If you have multiple heavy internet users in your home, we recommend our higher-speed plans</h6>
       
            <p>Up to max/500mbps </p>
            <p>Ultra-Unlimited Broadband</p>
            <p>SuperSpeed</p>
            <p>Dedicated broadband tech support</p>
            <p>Free Modem 12 month Term</p>
            
            <Button  variant="primary" className='openmodalbtn' onClick={() => {setOpenModal(true);}}>Order Now!</Button>
         {openModal &&<Modal closeModal={setOpenModal}/>}
        </div>
            </div>
        </div>
           </div>
           <div className='col'>
           <div className='card'>
            <div className='card-header'>
            <h4 className='p-1'>Ocean Fibre Max</h4>
            </div>
            <div className='card-body p-2'>

             
      
        <h1 className='my-0 font-weight-normal'>$95<small className='text-muted'>/mo</small></h1>
        <div className='mt-3 mb-4'>
      
        <h6>Enjoy faster Wi-Fi speeds, on more devices with the latest Wi-Fi 6 Technology. Good for browsing, social media, emails, Netflix etc</h6>
            <p>Up to 300/100mbps  </p>
            <p>Unlimited Broadband</p>
            <p>Dedicated broadband tech support</p>
            <p>Free modem on 12 month Term </p>
            <p>BYO modern available</p>
            
            
            <Button variant="primary" className='openmodalbtn1' onClick={() =>{setopenModall(true);}}>Order Now!</Button>
           {openModall && <Modal3 closemodal={setopenModall}/>}
        </div>
            </div>
        </div>
           </div>
           <div className='col'>
           <div className='card'>
            <div className='card-header'>
            <h4 className='p-1'>Ocean Gamer Max </h4>
            </div>
            <div className='card-body p-2'>
                
            
        <h1 className='my-0 font-weight-normal'>$110<small className='text-muted'>/mo</small></h1>
        <div className='mt-3 mb-4'>
        <div className='game'>
            <p>12 Month Plans</p>
            <p>Up to 500mbps</p>
            <p>Unlimited Data</p>
            <p>Add wifi 6 Gaming Router $15 per Month</p>
            <p>Terms & conditions Apply</p>
            <button onClick={() => {setgameopenmodal(!gameopenmodal)}}>submit</button>
            <div className='gamermax'>
            { gameopenmodal &&< GamerModal closegamemodal={setgameopenmodal}/>}
            </div>
            </div>
            
            
        </div>
            </div>
        </div>
           </div>
           <div className='col'>
           <div className='card'>
            <div className='card-header'>
            <h4 className='p-1'>Ocean Business Fibre </h4>
            </div>
            <div className='card-body p-2'>
                
      
        <h1 className='my-0 font-weight-normal'>NA<small className='text-muted'>/mo</small></h1>
        <div className='mt-3 mb-4'>
        <div className='businness'>
           <h5>A super-fast wireless connection for your business, keeping you working and minimizing downtime with easy installation.

Please give us a call to discuss your Business requirements</h5>
</div>
          
        </div>
            </div>
        </div>
           </div>
           <div className='col'>
           <div className='card voip' >
            <div className='card-header'>
            <h4 className='p-1'>VOIP/ Cloud PBX</h4>
            </div>
            <div className='card-body p-2'>
                
      
        <h1 className='my-0 font-weight-normal'>NA<small className='text-muted'>/mo</small></h1>
        <div className='mt-3 mb-4'>
      
            <h5>A Global Business Phone System works like you do</h5>
            
            <Button variant="primary">Order Now!</Button>
        </div>
      
            </div>
          
        </div>
       
           </div>
        
       </div>
    </div>
    </div>
    
    </div>
  )
}

export default Pricetag
