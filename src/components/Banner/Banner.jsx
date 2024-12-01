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
    
  );
}

export default Banner;
