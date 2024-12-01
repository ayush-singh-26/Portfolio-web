import React from "react";
import './Projects.css'
import colorSharp2 from '../../assets/img/color-sharp2.png'


function Projects() {
    return (
        <section className="project">
            <div className="row">
                <h1>Projects</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nesciunt harum quam dolor! Ad, nostrum reprehenderit voluptate facere eligendi est obcaecati culpa sequi beatae expedita laboriosam vero cupiditate libero inventore.</p>
            </div>

            <div className="tabs">
                <ul className="nav nav-pills" id="pills-tab">
                    <li className="nav-item">
                        <a className="nav-link active" id="first-tab" data-toggle="pill" href="#first">Tab 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="second-tab" data-toggle="pill" href="#second">Tab 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="third-tab" data-toggle="pill" href="#third">Tab 3</a>
                    </li>
                </ul>
            </div>


        </section>
        //     <section className="project" id="projects">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-12">
        //                 <div className="track-visibility">
        //                     <h2>Projects</h2>
        //                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


        //                     <div className="tab-content" id="pills-tabContent">
        //                         <div className="tab-pane fade show active" id="first">
        //                             <div className="row">
        //                                 <div className="col-md-4">
        //                                     <div className="card">
        //                                         <img src="project1.jpg" className="card-img-top" alt="Project 1"/>
        //                                         <div className="card-body">
        //                                             <h5 className="card-title">Project 1</h5>
        //                                             <p className="card-text">Description of project 1.</p>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-md-4">
        //                                     <div className="card">
        //                                         <img src="project2.jpg" className="card-img-top" alt="Project 2"/>
        //                                         <div className="card-body">
        //                                             <h5 className="card-title">Project 2</h5>
        //                                             <p className="card-text">Description of project 2.</p>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="tab-pane fade" id="second">
        //                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis.</p>
        //                         </div>
        //                         <div className="tab-pane fade" id="third">
        //                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <img className="background-image-right" src="color-sharp2.png" alt="Background Image"/>
        //     </div>
        // </section>

    );
}

export default Projects;
