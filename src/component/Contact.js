import React from 'react'
import "./Contact.css"

export default function Contact() {
    return (
        <>
            <div className="fullcon">
        
                <div className="contactform">
                    <h3>Contact Me</h3>
                    <form action="#">
                        <div className="usname">
                            <input type="text" name="" id="" placeholder="Your Name" />
                        </div>
                        <div className="usname">
                            <input type="text" name="" id="" placeholder="Subject" />
                        </div>
                        <div className="usname">
                            <input type="email" name="" id="" placeholder="Your Email" />
                        </div>
                        <button className="btn">Submit</button>
                    </form>
                </div>
                <div className="footer">
                    <h4>Follow me</h4>
                    <div className="logo">
                        <h4> <a href="#"><i class="fab fa-facebook-square fa-custom1"></i></a></h4>
                        <h4> <a href="#"><i class="fab fa-github fa-custom1"></i> </a> </h4>
                        <h4> <a href="#"><i class="fab fa-instagram fa-custom1"></i></a></h4>
                        <h4> <a href="#"><i class="fab fa-twitter fa-custom1"></i></a></h4>
                    </div>
                    <h5>Copyright @ 2021 CodeWithRohan | All Rights Reserved</h5>
                </div>
            </div>


        </>
    )
}


