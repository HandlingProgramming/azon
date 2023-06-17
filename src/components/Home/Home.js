import React, { Fragment } from "react";
import './Home.css'
// import headerimg from '../../assets/headerimg.png'

import home1 from '../../assets/Home11.jpg'
import home2 from '../../assets/Home22.jpg'
import mainHome from '../../assets/mainHome.jpg'
const Header = ()=>{

    return(
        <Fragment>
{/* 
            <section className="header_main">

            <img src={home1}  className="home1"/>
            <img src={home2} className="home2"/> 
            </section> */}



<div  className="header_main">
{/* <p className="header_main_p">اهلاً بكم في الموقع الرسمي  لشركة أذون  ليموزين</p> */}
  <img src={mainHome} className="home1" />
  {/* <p className="header_main_p2">نعمل من اجل راحتك </p> */}
  {/* <img src={home2} className="home2"/>  */}
  
</div>





{/* 
<div class="container1">
  <div class="row">
    <div class="col-sm-12">
      <img src={home1} alt="test" class="img-fluid"/>
      <div class="heroContent">
        <h1>Jumbotron H1 goes here</h1>
        <p class="pHero">
        This is the first line in the jumbotron.<br/>
        The second line appears underneath the firstline.
        </p>
        
      </div>
    </div>
  </div>
</div> */}






        </Fragment>
        
    );
}

export default Header ;