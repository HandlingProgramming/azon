// import React, { Fragment } from "react";
import './ContactUs.css'
// // import headerimg from '../../assets/headerimg.png'
// // import home1 from '../../assets/Home1.jpg'
// // import home2 from '../../assets/Home2.jpg'
// const  ContactUs= ()=>{

//     return(
//         <Fragment>

// <h1 > ContactUs</h1>

//         </Fragment>
//     );
// }

// export default ContactUs ;










import React, { Fragment, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Dropdown } from 'bootstrap';
import azzon from '../../assets/contact.png'
const  ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i7gnobg', 'template_047vc5w', form.current, 'AFqehjYq5uzNkvPod')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Fragment>
<div class="container1">
    <div class="content">
      <div class="ds-row">
        <div class="panel">
          <div class="l-col-1-2 zero-padding">
            <div class="form-box">
              <form  ref={form} onSubmit={sendEmail}>
                <div class="ds-row">
                  <div class="l-col-1-3">
                    <label>الاســــم </label>
                  </div>
                  <div class="l-col-2-3">
                    <input type="text" name="from_name" placeholder="ضع اسمك هنا..." required/>
                  </div>
                </div>
                <div class="ds-row">
                  <div class="l-col-1-3">
                    <label for='email'>البريد الالكتروني </label>
                  </div>
                  <div class="l-col-2-3">
                    <input type="email" name="from_gmail" id='email' placeholder="ضع بريدك الالكتروني هنا..." />
                  </div>
                </div>

                <div class="ds-row">
                  <div class="l-col-1-3">
                    <label> العنوان </label>
                  </div>
                  <div class="l-col-2-3">
                    <input type="text" name="address" placeholder=" من فضلك اكتب عنوانك" required/>
                  </div>
                </div>
                <div class="ds-row">
                  <div class="l-col-1-3">
                    <label>رقم الهاتف </label>
                  </div>
                  <div class="l-col-2-3">
                    <input type="tel" name="user_phone" placeholder="ضع رقم هاتفك هنا..." required/>
                  </div>
                </div>


                <div class="ds-row">
                  <div class="l-col-1-3">
                    <label>عنوان الرسالة </label>
                  </div>
                  <div class="l-col-2-3">
                    <input type="text" name="user_title"  />
                  </div>
                </div>


                <div class="ds-row">
                  <div class="l-col-1-3">
                    <label> المكان </label>
                  </div>
                  <div class="l-col-2-3">
                    <select id="cars" name="from_place" required>
                    <option >	مطار القاهرة الدولي</option>
                        <option >	مطار سفنكس الدولي</option>
                        <option >	مطار برج العرب الدولي</option>
                        <option >	مطار مرسى مطروح الدولي</option>
                        <option >	مطار شرم الشيخ الدولي</option>
                        <option >	مطار طابا الدولي </option>
                        <option >	مطار الغردقة الدولي   </option>
                        <option >مطار أسيوط الدولي</option>
                        <option >مطار الأقصر الدولي</option>
                        <option >مطار أسوان الدولي</option>
                        <option >الإسكندرية</option>
                        <option >الإسماعيلية</option>
                        <option >أسوان</option>
                        <option >أسيوط</option>
                        <option >الأقصر</option>
                        <option >البحر الأحمر</option>
                        <option >البحيرة</option>
                        <option >بني سويف</option>     
                        <option >بورسعيد</option>
                        <option >	جنوب سيناء</option>
                        <option >الجيزة</option>
                        <option >الدقهلية</option>      
                        <option >دمياط</option>
                        <option >	سوهاج	</option>
                        <option >	السويس</option>
                        <option >الشرقية</option>       
                        <option >شمال سيناء</option>
                        <option >	الغربية</option>
                        <option >الفيوم</option>
                        <option >القاهرة</option>        
                        <option >	القليوبية</option>
                        <option >قنا</option>
                        <option >كفر الشيخ	</option>
                        <option >	مطروح</option>
                        <option >	المنوفية</option>
                        <option >المنيا 	</option>
                        <option >	الوادي الجديد</option>
                    </select> 
                    <label for="cars">: من </label>
                 </div>
                  <div class="l-col-2-2">
                    <select id="cars" name="to_place" required>
                    <option >	مطار القاهرة الدولي</option>
                        <option >	مطار سفنكس الدولي</option>
                        <option >	مطار برج العرب الدولي</option>
                        <option >	مطار مرسى مطروح الدولي</option>
                        <option >	مطار شرم الشيخ الدولي</option>
                        <option >	مطار طابا الدولي </option>
                        <option >	مطار الغردقة الدولي   </option>
                        <option >مطار أسيوط الدولي</option>
                        <option >مطار الأقصر الدولي</option>
                        <option >مطار أسوان الدولي</option>
                        <option >الإسكندرية</option>
                        <option >الإسماعيلية</option>
                        <option >أسوان</option>
                        <option >أسيوط</option>
                        <option >الأقصر</option>
                        <option >البحر الأحمر</option>
                        <option >البحيرة</option>
                        <option >بني سويف</option>     
                        <option >بورسعيد</option>
                        <option >	جنوب سيناء</option>
                        <option >الجيزة</option>
                        <option >الدقهلية</option>      
                        <option >دمياط</option>
                        <option >	سوهاج	</option>
                        <option >	السويس</option>
                        <option >الشرقية</option>       
                        <option >شمال سيناء</option>
                        <option >	الغربية</option>
                        <option >الفيوم</option>
                        <option >القاهرة</option>        
                        <option >	القليوبية</option>
                        <option >قنا</option>
                        <option >كفر الشيخ	</option>
                        <option >	مطروح</option>
                        <option >	المنوفية</option>
                        <option >المنيا 	</option>
                        <option >	الوادي الجديد</option>
                    </select>
                    <label for="cars">: الي </label>
                  </div>
                </div>



                <div class="ds-row">
                  <div class="l-col-1-3">
                    <label>نص الرسالة </label>
                  </div>
                  <div class="l-col-2-3">
                    <input type="text" name="message" placeholder="برجاء كتابه العنوان بالتفصيل" required id='message'/>
                  </div>
                </div>

                <div class="ds-row">
                  <div class="l-col-1-3">
                    <label>ملاحظات</label>
                  </div>
                  <div class="l-col-2-3">
                    {/* <input type="text" name="title" placeholder="برجاء كتابه العنوان بالتفصيل"/> */}
                    <textarea name="notes" placeholder="" ></textarea>
                  </div>
                </div>
                <div class="ds-row">
                  <button  onclick="document.getElementById('message')"  type='submit'><i class="fab fa-telegram-plane"></i> إرســـــال</button>
                </div>
                <div class="clear"></div>
              </form>
            </div>
          </div>
          <div class="l-col-1-2 center zero-padding">
            <div class="info-box">
              <div class="map">
        <img src={azzon} className='ContactUs_left_img' />
              </div>
              <div class="contact-info">
                <div class="l-col-1-2">
                  <div class="box">
                    <span class="mobile">
                     {/* <i class="fas fa-phone fa-3x"></i> */}
                     <i className="fas fa-phone me-3 text-secondary icon_contact"></i>
                    </span>
                    <h6 className='ContactUs_left' >  +2 01279270957 </h6>
                  </div>
                </div>


                <div class="l-col-1-2">
                  <div class="box">
                    <span class="mail">
                         {/* <i class="far fa-envelope-open fa-3x"></i> */}
                    <a href='https://www.facebook.com/people/AZON/100093103122819/'>   
                     <i className="fab fa-facebook-f icon_contact" ></i> 
                     </a> 
                       </span>
                    <h6 className='ContactUs_left'>AZON</h6>
                  </div>
                  <div class="l-col-1-2">
                </div>
                </div>



                <div class="l-col-1-2">
                  <div class="box">
                    <span class="mobile">
                     {/* <i class="fas fa-phone fa-3x"></i> */}
                  <a href='https://wsend.co/201551994696'>  <i class="fa-brands fa-whatsapp icon_contact"></i> </a> 
                     </span>
                    <h6 className='ContactUs_left' >  +2 01551994696 </h6>
                  </div>
                </div>


                <div class="l-col-1-2">
                  <div class="box">
                    <span class="mail">
                         {/* <i class="far fa-envelope-open fa-3x"></i> */}
                      <a href="https://www.instagram.com/azon3830/?next=%2F">  <i class="fa-brands fa-instagram icon_contact"></i> </a> 
                     </span>
                    <h6 className='ContactUs_left'>@azon3830</h6>
                  </div>
                  <div class="l-col-1-2">
                </div>
                </div>



              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>





    
    </Fragment>
  );
};
export default ContactUs ;