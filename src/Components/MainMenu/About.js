// import React from 'react'

import React from "react";

//profile photo
import profile from './../../assets/images/ML.jpg'

//Create About-Component
function About() {
    

    return (<>
        <h1 className="text-center text-success">
            ABOUT COMPONENT</h1>
            <p className="para">
                As an integrated team of specialists, we provide strategy, architecture, design, 
                security and development of cutting edge applications.
                From standalone apps to online social network, we deliver high-quality products.            
            </p>
            <div className="container">
                <div className="row">
                    <img src={profile} className="w-25 ma-auto" alt="pro"/>

                </div>

            </div>
            </>)
            
}
export default About;