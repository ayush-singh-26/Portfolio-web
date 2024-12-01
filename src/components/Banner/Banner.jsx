import React from "react";
import './Banner.css';
import headerImg from '../../assets/img/header-img.svg';
import '../../App.css';

function Banner() {
  return (

    <div className="banner">
      <div className="left-section">
        <h1>Hi! I'm Ayush Singh</h1>
        <p>I'm a web developer, web designer, and UI/UX designer. I specialize in creating engaging and user-friendly experiences.</p>
        <button>Let's Connect <i className="arrow-icon">&#8594;</i></button>
      </div>


      <div className="right-section">
        <img src={headerImg} alt="" className="headerImg" />
      </div>
    </div >
    // <section className="banner" id="home">
    //   <div className="row">
    //       <div className="track-visibility">
    //         <div className="animate__animated animate__fadeIn">
    //           <span className="tagline">Welcome to my Portfolio</span>
    //           <h1>
    //             Hi! I'm Ayush <br />
    //             <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
    //               <span className="wrap">Web Developer</span>
    //             </span>
    //           </h1>
    //           <p>
    //             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    //           </p>
    //           <button>Let’s Connect <i className="arrow-icon">&#8594;</i></button>
    //         </div>
    //     </div>

    //     <div className="">
    //   </div>
    // </section>
  );
}

export default Banner;
