import React from "react";
import './Contact.css';
import contactImg from '../../assets/img/contact-img.svg';
import colorSharp2 from '../../assets/img/color-sharp2.png';

function Contact() {
    return (
        <section className="contact" id="connect">
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <div className="track-visibility">
                        <img className="contactImg" src={contactImg} alt="Contact Us" />
                    </div>
                </div>

                {/* Right Column (Form) */}
                <div className="col-12 col-md-6">
                    <div className="track-visibility">
                        <div className="animate__animated animate__fadeIn">
                            <h2>Get In Touch</h2>
                            <form id="contact-form">
                                    {/* First Name */}
                                    <div className="col-12 col-sm-6 px-1">
                                        <input type="text" id="firstName" placeholder="First Name" required />
                                    </div>

                                    {/* Last Name */}
                                    <div className="col-12 col-sm-6 px-1">
                                        <input type="text" id="lastName" placeholder="Last Name" required />
                                    </div>

                                    {/* Email Address */}
                                    <div className="col-12 col-sm-6 px-1">
                                        <input type="email" id="email" placeholder="Email Address" required />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="col-12 col-sm-6 px-1">
                                        <input type="tel" id="phone" placeholder="Phone No." required />
                                    </div>

                                    {/* Message */}
                                    <div className="col-12">
                                        <textarea rows="6" id="message" placeholder="Message" required></textarea>
                                    </div>

                                    <div className="col-12 px-1">
                                        <button type="submit"><span>Submit</span></button>
                                    </div>

                                    <div className="col-12">
                                        <p id="status-message" className="status-message"></p>
                                    </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <img className="background-image-right" src={colorSharp2} alt="Background Image" />
        </section>
    );
}

export default Contact;
