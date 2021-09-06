import React from 'react'
import "./About.css";


export default function About() {
    return (
        <>
            <div className="navfloat">
                <div className="about">
                    <h1>About me</h1>
                    <h2>Who Am I?</h2>
                </div>
                <div className="info">
                    <div className="aboutme">
                        <h2>I'm Rohan and I am Web devloper</h2>
                        
                        <h3>I am currently pursuing B.E degree in Information Technology from Atharva College of engineering.I enjoy taking complex programs and turning them into simple and beauiful interface design.
                        <p>I am familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap and other modern frameworks</p>
                        </h3>
                        <div className="property">
                            <img src="img/html.png" alt="" />
                            <img src="img/css.png" alt="" />
                            <img src="img/js.png" alt="" />
                            <img src="img/photoshop.png" alt="" />
                            <img src="img/bootstrap.png" alt="" />
                        </div>
                    </div>
                    <div className="aboutimg">
                        <img src="img/network.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
