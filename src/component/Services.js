import React from 'react'
import "./Services.css";
export default function Services() {
    return (
        <>
            <div className="fullser">

                <div className="sinfo">
                    <h2>What i know</h2>
                    <h1>Awesome Qualitiy Services</h1>
                </div>
                <div className="mainservice">
                    <div className="b1">
                        <i class="fas fa-laptop-code fa-customize"></i>
                        <h2>Web Devlopment</h2>
                    </div>
                    <div className="b2">
                        <i class="fas fa-laptop fa-customize"></i>
                        <h2>Web Design</h2>
                    </div>
                </div>
                <div className="mainservice2">
                    <div className="b3">
                        <i class="fas fa-gamepad fa-customize"></i>
                        <h2>Game Devlopment</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
