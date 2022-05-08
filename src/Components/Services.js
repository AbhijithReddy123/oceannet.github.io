import React from 'react'
import image7 from './../Components/assets/images/services-1.jpg';
import image8 from './../Components/assets/images/services-2.jpg';
import image9 from './../Components/assets/images/servicese-3.jpg';
import './Services.css'
const Services = () => {
  return (
    <div>
      <h1 className='tech-2'>Services and plans</h1>
      <div class="card-group">
  <div class="card">
    <img src={image7} class="card-img-top" alt="..."/>
    <div class="card-body">
      <div className='cheapplans'>
      <h5 class="card-title" className='servicetitle'>Cheapest Plans</h5>
      <p class="card-text" className='servicetext'>Choose cheap and best Broadband plans suited for you</p>
      </div>
    </div>
  </div>
  <div class="card">
    <img src={image8} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Fastest Fibre</h5>
      <p class="card-text">Compare the fastest fibre broadband plans. find the fastest plans at the best price</p>
    
    </div>
  </div>
  <div class="card">
    <img src={image9} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Our Best Deals</h5>
      <p class="card-text">Exclusive deals only available to NZ. COmpare the best broadband deals in New Zeland. SAVE NOW! </p>
      
    </div>
  </div>
</div>
</div>
    
  )
}

export default Services
