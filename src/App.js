
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Technologies from './Components/Technologies'
import Home from './Components/Home'
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footers from './Components/Footers';
import Pricetag from './Components/Pricetag';
import CustomiseBundle from './Components/CustomiseBundle';
import Description from './Components/Description';
import Businessfibre from './Components/Businessfibre';
import Checkout from './Components/Checkout';


function App() {
  return (
  <Router>
    <div className="App">
    <Navbar/>
   
    <Routes>
      <Route path='/Technology' element={<Technologies/>}/>
      <Route path='/' element={<Home />}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/About' element={<About />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/customisebundle' element={<CustomiseBundle/>}/>
      
    </Routes>
    <Description/>
    <Businessfibre/>
    <Technologies/>
    <Services/>
    <About/>
   <Pricetag/>
 

    <Footers/>
    </div>
    </Router>
  );
}

export default App;
