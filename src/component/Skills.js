import React from 'react';
import "./Skills.css";

export default function Skills() {
    return (
        <>
            <div className="fullskills">


                <div className="content">
                    <h1>My skills</h1>
                    <h2>what i know</h2>
                </div>
                <div className="box">
                    <div className="skills1">
                        <li>
                            <h3>HTML</h3><span className="bar" ><span className="html"></span></span>
                        </li>
                        <li>
                            <h3>css</h3><span className="bar" ><span className="css"></span></span>
                        </li>
                        <li>
                            <h3>React</h3><span className="bar" ><span className="react"></span></span>
                        </li>
                        <li>
                            <h3>javascript</h3><span className="bar" ><span className="js"></span></span>
                        </li>
                    </div>
                    <div className="skills2">
                        <li>
                            <h3>C</h3><span className="bar" ><span className="c"></span></span>
                        </li>
                        <li>
                            <h3>C++</h3><span className="bar" ><span className="cplus"></span></span>
                        </li>
                        <li>
                            <h3>Java</h3><span className="bar" ><span className="java"></span></span>
                        </li>
                        <li>
                            <h3>Python</h3><span className="bar" ><span className="python"></span></span>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}
