import React from "react";
import './Skill.css';
import colorSharp from "../../assets/img/color-sharp.png";
import reactImg from '../../assets/react.svg';
import nodeImg from '../../assets/img/node.svg';
import mongoImg from '../../assets/img/mongo.svg';
import expressImg from '../../assets/img/express.svg';
import cppImg from '../../assets/img/cpp.svg';
import pythonImg from '../../assets/img/python.svg';

function Skill() {
    return (
        <div className="skill" id="skill">
            <div className="skill-bx">
                <div>
                    <h2>Skills</h2>
                    <p>Proficient in full-stack development with a focus on MERN stack and problem-solving in C++.</p>
                </div>
                <div className="skill-item">
                    <div className="item">
                        <img src={reactImg} alt="React" />
                        <h5>React.js</h5>
                    </div>
                    <div className="item">
                        <img src={nodeImg} alt="Node.js" />
                        <h5>Node.js</h5>
                    </div>
                    <div className="item">
                        <img src={mongoImg} alt="MongoDB" />
                        <h5>MongoDB</h5>
                    </div>
                    <div className="item">
                        <img src={expressImg} alt="Express.js" />
                        <h5>Express.js</h5>
                    </div>
                    <div className="item">
                        <img src={cppImg} alt="C++" />
                        <h5>C++</h5>
                    </div>
                    <div className="item">
                        <img src={pythonImg} alt="Python" />
                        <h5>Python</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
