import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Form
} from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom'

import Navs from './components/Navs/Navs';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import OurFeatures from './components/OurFeatures/OurFeatures';
import Services from './components/Services/Services';
import ServicesVIP from './components/ServicesVIP/ServicesVIP'
import Footer from './components/Footer/Footer';
function App() {

  
  return (
    // <div className="App">

<>

 <BrowserRouter>
    
    <Navs> </Navs> 
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
          <Route path='/OurFeatures' element={<OurFeatures></OurFeatures>}></Route>
          <Route path='/Services' element={<Services></Services>}></Route>
          <Route path='/ServicesVIP' element={<ServicesVIP></ServicesVIP>}></Route>
      </Routes>
      
      <Footer></Footer>
    </BrowserRouter>
 </>




  );
}

export default App;
