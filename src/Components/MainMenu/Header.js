import React from "react";
import {Link,} from 'react-router-dom'

//Create Header_Component
function Header(){
    var MenuNames=["Home","About","Services","Itservices","Contact","Myclass","Lifecycle","Restapi","ReactBootstrap","Signup"]
    return(<>

    {/*Links For Menu*/}
    <nav className="navbar navbar-expand-lg navbar-light" 
    style={
        {
            backgroundColor:'#27477a',
            borderBottom:'0.5px white solid',
            borderTop:'0.5px white solid',

        }
      }>
        <div className="container-fluid">
            <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarnav">
            <span className="navbar-toggler-icon"></span>    
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">

                    {/* <li className="nav-item">
                        <Link className="nav-link active text-white" to="/home">Home</Link>

                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active text-white" to="/about">About</Link>

                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active text-white" to="/services">Services</Link>

                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active text-white" to="/itservices">Itservices</Link>

                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active text-white" to="/contact">Contact</Link>

                    </li> */}
                    {
                        MenuNames.map((data,i)=>
                        <li className="nav-item key={i} px-3">
                            <Link className="nav-link text-white" to={`/${data.toLowerCase()}`}>{data}</Link>
                        </li>
                        )
                    }

                    
                </ul>
            </div>
        </div>
    </nav>
    </>)
}
export default Header;