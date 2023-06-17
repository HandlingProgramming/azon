import React, { Fragment } from "react";
import './Footer.css'

import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn,
    MDBInput

  } from 'mdb-react-ui-kit';
const Footer = ()=>{

    return(
        <Fragment>

{/* <footer class="text-center text-lg-start bg-white text-muted main_footer" >
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span> 
      <p><i class="fas fa-phone me-3 text-secondary"></i> +2 01551994696</p>   
       <p><i class="fas fa-phone me-3 text-secondary"></i> +2 01279270957</p>
       </span>
    </div>

    <div>
        <a href="https://wsend.co/201551994696" class="me-4 link-secondary">
            <i class="fab fa-fab fa-whatsapp"></i>
        </a>
        <a href="" class="me-4 link-secondary">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/people/AZON/100093103122819/" class="me-4 link-secondary">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/azon3830/?next=%2F" class="me-4 link-secondary">
            <i class="fab fa-instagram"></i>
        </a>
    </div>
  </section>

</footer> */}




    <MDBFooter  className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong className="footer_numbers"> +2 01551994696</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                   <section className='mb-4'>

                        <MDBBtn
                        floating
                        className='m-1 footer_facebook'
                        // style={{  backgroundColor: ' rgb(169,120,49)' }}
                        href='https://www.facebook.com/people/AZON/100093103122819/'
                        role='button'
                        >
                        <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        {/* <MDBBtn
                        floating
                        className='m-1 footer_twitter'
                        style={{  backgroundColor: ' rgb(169,120,49)' }}
                        href='#!'
                        role='button'
                        >
                        <MDBIcon fab icon='twitter' />
                        </MDBBtn> */}

                        {/* <MDBBtn
                        floating
                        className='m-1 footer_google'
                        style={{  backgroundColor: ' rgb(169,120,49)' }}
                        href='#!'
                        role='button'
                        >
                        <MDBIcon fab icon='google' />
                        </MDBBtn> */}
                        <MDBBtn
                        floating
                        className='m-1 footer_instagram'
                        style={{  backgroundColor: ' rgb(169,120,49)' }}
                        href='https://www.instagram.com/azon3830/?next=%2F'
                        role='button'
                        >
                        <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn
                        floating
                        className='m-1 footer_whatsapp '
                        style={{  backgroundColor: ' rgb(169,120,49)' }}
                        href='https://api.whatsapp.com/send/?phone=201551994696'
                        role='button'
                        >
                        <i class="fab fa-whatsapp"></i>
                        </MDBBtn>

                        {/* <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: ' rgb(169,120,49)' }}
                        href='#!'
                        role='button'
                        >
                        <MDBIcon fab icon='github' />
                        </MDBBtn> */}
                        </section>
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong className="footer_numbers">   +2 01279270957 </strong>
              </p>
            </MDBCol>

          </MDBRow>
        </form>
      </MDBContainer>

 
    </MDBFooter>


    <div className='text-center p-3 last_footer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       <i class="fas fa-heart heart_icon" ></i>  رضاك هدفنا

      </div>



        </Fragment>
    );
}

export default Footer ;