import React from "react";
import './Contact.css';
import contactImg from '../../assets/img/contact-img.svg';
import colorSharp2 from '../../assets/img/color-sharp2.png';

function Contact() {
    return (

        <section className="contact" id="contact">
            <div className="contact-logo">
                <img className="contactImg" src={contactImg} alt="Contact Us" />
            </div>
            <div className="">
                <h2>Get In Touch</h2>
                <form id="contact-form">
                    <div className="details">
                        <input type="text" id="firstName" placeholder="First Name" required />
                        <input type="text" id="lastName" placeholder="Last Name" required />
                    </div>
                    
                    <div className="details">
                        <input type="email" id="email" placeholder="Email Address" required />
                        <input type="tel" id="phone" placeholder="Phone No." required />
                    </div>
                    
                    <div className="">
                        <textarea rows="6" id="message" placeholder="Message" required></textarea>
                    </div>
                    <div className="">
                        <button type="submit"><span>Submit</span></button>
                    </div>
                    <div className="">
                        <p id="status-message" className="status-message"></p>
                    </div>

                </form>
            </div>
        </section>

    
    );
}

export default Contact;
