import React from 'react'
import {Carousel} from 'react-bootstrap';
import image12 from './../Components/assets/images/isp-5.png';
import image2 from './../Components/assets/images/isp-2.jpg';
import image11 from './../Components/assets/images/isp-4.jpg';
const Home = () => {
  return (
    <div>
     <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image12}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image11}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Home
