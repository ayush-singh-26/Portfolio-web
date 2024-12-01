import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import './Banner.css';
import headerImg from '../../assets/img/ayush.png';
import '../../App.css';

function Banner() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full-Stack Developer.",
        "React Enthusiast.",
        "Chess Player.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Clean up the Typed instance
    };
  }, []);

  return (

    <div className="banner">
      <div className="left-section">
        <h1>Hi! I'm Ayush Singh</h1>
        <p>I'm a <span ref={typedRef}></span></p>
        <p>I specialize in creating engaging and user-friendly experiences.</p>
        <button>Let's Connect <i className="arrow-icon">&#8594;</i></button>
      </div>


      <div className="right-section">
        <img src={headerImg} alt="" className="headerImg" />
      </div>
    </div >
    
  );
}

export default Banner;
