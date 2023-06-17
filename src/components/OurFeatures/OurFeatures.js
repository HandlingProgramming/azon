import React, { Fragment } from "react";
import './OurFeatures.css'
import ourfeature from '../../assets/ourfeature.png'

const OurFeatures = ()=>{

    return(
        <Fragment>

            {/* <section className="header_main">
            <img src={home1}  className="home1" />
            <img src={home2} className="home2"/> 
            </section> */}

<div class="row main_ourfeature" >
  <div class="col-6 main_ourfeatur_content" >
    <h1 className="main_ourfeatur_content_title">مميزاتنا</h1>
    <p  className="main_ourfeatur_content_det"> 
     هدفنا هو الحفاظ على راحة العميل وتوصيله الى مكانه المحدد بكل أمان وسلامة لذلك نوفر لكل عملائنا جميع السيارت الحديثة المزودة بوسائل الأمان مع كباتن تقود السيارات بكل احترافية مع الالتزام بجميع وسائل الأمان التي تتمثل في عدم السرعه أثناء القيادة والانتباه الدائم للطريق وعدم استخدام الهاتف أثناء القيادة والحفاظ على راحة وتلبية احتياجات العميل كاملة 
      <br/> <br/>
جميع السيارات مزودة بجميع السبل الى تساعد على راحة العميل من حيث تقديم المياه والعصائر والضيافة قبل ای رحلة يتم ارسال صورة السيارة ورقم اللوحة وبيانات الكابتن من حيث البطاقة الشخصية ورخصة القيادة. <br/> <br/>

في حالة الذهاب والعودة في نفس اليوم تمنح 3 ساعات انتظار مجانا. كما ان جميع الرسوم التي تشمل كارتة المطارات والطرق نقوم بدفعها ولن يتحمل العميل اي تكلفة.
<br/>
<br/>
عملائنا الكرام نتشرف دائما بالتعامل معكم وتقديم خدمة متميزة لكم وبأسعار تنافسية على أمل أن تنال رضا سيادتكم
</p>
  </div>
  <div class="col-6">
    <img src={ourfeature} className="main_ourfeature_img"></img>
  </div>
</div>



        </Fragment>
    );
}

export default OurFeatures ;