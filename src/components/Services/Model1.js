import React, { Fragment } from "react";
import { useState } from "react";
import Data from "../../Data";
import { Container, Card , Button, Row, Col} from "react-bootstrap";
import Model2 from "./Model2";
import './Services.css'
// import serviceimg from "../../assets/Home2.jpg"
import servicesleftimg from '../../assets/mainHome3.png'

const Model1 =()=>{
    const [model , setmodel] = useState(false)
    const [tempdata , settempdata] = useState([])


    const getData =(/*img ,*/ title, desc)=>{
        let tempData = [ /*img , */title, desc];
        settempdata(item=>[1, ...tempData])
        return setmodel(true);

    }
    return(
        <Fragment>
                    <Container className="main_btns">
                        <Row>
                            <Col className="services_left_col">
                                <img className="servicesleftimg" src={servicesleftimg} title="servicesimage"/>
                            </Col>
                            
                            <Col>
                        {Data.cardData.map((item , index)=>{
                            return(
                                <Fragment>
                                    <section >
                                        <div className="col-11 col-md-6 col-lg-7 mx-1 mb-2" key={index}>
                                            <Button className="model_btn" onClick={()=> getData(/*item.imgsrc ,*/  item.title , item.desc)}> {item.btn} </Button>
                                        </div>
                                    </section>
                                 </Fragment>
                            )
                        })}
                            </Col>
                            {/* <Col>
                            </Col> */}
                        </Row>
                    </Container>
            {
                model === true ?  <Model2  /*img={tempdata[1]} */ title={tempdata[1]} desc={tempdata[2]} hide={()=>setmodel(false)}/>: ''
            }
        </Fragment>
    );
}

export default Model1;
