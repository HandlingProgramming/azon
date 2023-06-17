import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
// import NavLink from "react-bootstrap/esm/NavLink";
import './Navs.css'

 const Navs = ()=>{
    return(
        <Fragment>
            {/* <section className="top_main_section fixed-top" >
                  
            </section>
 */}

        <Navbar collapseOnSelect expand="lg"  className="main_navbar"  fixed="top">
            <Container className="main_items">
                <Navbar.Brand eventKey="5" as={Link} to="/ContactUs" className="navbar_left_a">تواصل معنا</Navbar.Brand>
               <a href="https://api.whatsapp.com/send/?phone=201551994696" className="navbar_left_number_a" ><Navbar.Brand className="navbar_left_number">   <i className="fas fa-phone me-3 text-secondary icon_contact"></i> 01551994696 </Navbar.Brand></a> 

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar_toggle" > <i class="fas fa-align-justify"></i> القائمه الرئيسيه</Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto items_link">

                    <Nav.Link  eventKey="1" as={Link} to="/OurFeatures"className="navbar_a" >مميزاتنا</Nav.Link>
                    <Nav.Link  eventKey="2" as={Link} to="/ServicesVIP"className="navbar_a" >VIP خدمة</Nav.Link>
                    <Nav.Link  eventKey="3" as={Link} to="/Services"className="navbar_a" >خدماتنا</Nav.Link>
                    <Nav.Link  eventKey="4" as={Link} to="/Home"className="navbar_a" > الرئيسيه</Nav.Link>

             


                            {/* <Nav.Link eventKey="1" as={Link} to="'/Home" > الرئيسيه</Nav.Link> */}
                            {/* <Nav.Link eventKey="2" as={Link} to="/Services" > Service</Nav.Link>
                            <Nav.Link eventKey="3" as={Link} to="/Our_Project" > Our Project</Nav.Link>
                        <Nav.Link eventKey="4" as={Link} to="/About" > About</Nav.Link>   */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>







        </Fragment>
      );
    }
    

export default Navs;