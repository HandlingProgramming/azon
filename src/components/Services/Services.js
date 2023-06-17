import React, { Fragment ,useState } from "react";
import services1 from '../../assets/services1.jpg'
import servicesleftimg from '../../assets/servicesleftimg.png'

import './Services.css'


import Model1 from "./Model1";
const Services =()=>{
    return(
        <Fragment >
            <section className="header_main">
                <img src={services1}  className="main_services_img"/>
                {/* <img src={servicesleft} className="home2"/>  */}
            </section> 

     <Model1></Model1>

</Fragment>  
      
    );
}



export default Services;

