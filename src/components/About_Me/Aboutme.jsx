import React from "react";
import "./aboutme.css"

const AboutMe = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>About Me</h1>
                </div>
            </div>
            <div className="row abt_me">
                <div className="col-1">
                    <div className="vr h-100"></div>
                </div>
                <div className="row">
                    <div className="col-11 text">
                        <p>Enginering</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;