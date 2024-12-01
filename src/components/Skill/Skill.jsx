import React from "react";
import './Skill.css'
import Carousel from "react-multi-carousel";
import colorSharp from "../../assets/img/color-sharp.png"
import reactImg from '../../assets/react.svg'

function Skill() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="skill">
            <div className="skill-bx">

            <div>
                <h2>Skills</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, labore!</p>
            </div>
            <div className="skill-item">
                <div className="item">
                    <img src={reactImg} alt="" />
                    <h5>React Js</h5>
                </div>
                <div className="item">
                    <img src={reactImg} alt="" />
                    <h5>React</h5>
                </div>
                <div className="item">
                    <img src={reactImg} alt="" />
                    <h5>React</h5>
                </div>
                <div className="item">
                    <img src={reactImg} alt="" />
                    <h5>React</h5>
                </div>
                <div className="item">
                    <img src={reactImg} alt="" />
                    <h5>React</h5>
                </div>
                <div className="item">
                    <img src={reactImg} alt="" />
                    <h5>React</h5>
                </div>
                {/* <div className="item">
                    <img src={reactImg} alt="" />
                    <h5>React</h5>
                </div>
                <div className="item">
                    <img src={reactImg} alt="" />
                    <h5>React</h5>
                </div>
                <div className="item">
                    <img src={reactImg} alt="" />
                    <h5>React</h5>
                </div> */}
            </div>
            </div>
            <img src={colorSharp} alt="" />
        </div>
    );
}

export default Skill;
