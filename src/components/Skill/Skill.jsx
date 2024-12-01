import React from "react";
import './Skill.css'
import colorSharp from "../../assets/img/color-sharp.png"
import reactImg from '../../assets/react.svg'

function Skill() {

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

                </div>
            </div>
            {/* <img src={colorSharp} alt="" /> */}
        </div>
    );
}

export default Skill;
