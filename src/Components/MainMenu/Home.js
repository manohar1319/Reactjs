import React from "react";
//Profile Photo
import Profile from './../../assets/images/RRR.jpg'


//Backgroun wallpapers
import bgwall from './../../assets/images/image.jpg'

//Internal styles
var styles={
    backgroundImage: `url(${bgwall})`,
    //backgroundRepeat:'no-repeat',
    backgroundsize:'cover'
}


//Create Home-Component
function Home() {

    return (<>
    <div className="Jumbotron text-white p-5" style={styles}>
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="h1 pt-5 mt-5">I am Manohar Polineni</h1>
                    <h5 className="bg-success p-2 mt-4 w-75 text-center">FullSTack Developer</h5>
                </div>
                
                <div className="col-lg-6">
                    <img src={Profile} className="w-75 ma-auto"  alt="pro" />

                </div>

                
            </div>
        </div>
    </div>
    </>)
}
export default Home;
