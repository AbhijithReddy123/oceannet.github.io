import React from 'react'
import './technology.css'
import image4 from './../Components/assets/images/tech-1.jpg';

import image5 from './../Components/assets/images/tech-2.jpg';

import image6 from './../Components/assets/images/hyberfibre.jpg';
const Technologies = () => {
  return (
    
    <div>
      <h1 className='tech-1'>Technologies</h1>
      <div className='cards'>
  <div class="card-group">
  <div class="card">
    <img src={image4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Wireless</h5>
      <p class="card-text" className='cardtext'>Broadband that delivered over 5G mobile networks. Wireless supports a wide range of online activities, like Web browsing, emails, and video streaming.</p>
    </div>
    <div class="card-footer">
   
    </div>
  </div>
  <div class="card">
    <img src={image5} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Fibre</h5>
      <p class="card-text" className='cardtext'>The gold standard  for your internet. Broadband is delivered over newly built  fibre network and designed to make the most of it too.</p>
    </div>
    <div class="card-footer">
     
    </div>
  </div>
  <div class="card">
    <img src={image6} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title" className='cardtitle'>HyperFibre</h5>
      <p class="card-text" className='cardtext-1'>Hyperfibre supports all online activities that standard fibre broadband does but 40x faster and much more data capacity</p>
    </div>
    <div class="card-footer">
      
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Technologies;
