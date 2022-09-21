//Routings.js Module
import React from "react";

//Component_Nesting_Into_Routings
//Functional_Components
import Header from './MainMenu/Header';
import Footer from './MainMenu/Footer';
import Home from "./MainMenu/Home";
import About from "./MainMenu/About";
import Services from "./MainMenu/Services";
import Contact from "./MainMenu/Contact";
import Pagenotfound from "./MainMenu/Pagenotfound";
import Itservices from "./MainMenu/Itservices";



//Class_Components
import Myclass from "./Myclass";
import Lifecycle from "./MainMenu/Lifecycle";
import Restapi from "./MainMenu/Restapi";
import View from "./MainMenu/RESTAPI/View";
import ReactBootstrap from "./ReactBootstrap";
import Edit from "./MainMenu/RESTAPI/Edit";
import Signup from "./MainMenu/Signup";

//Router Package
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Routings_Setup
function Routings()
{
    return (<BrowserRouter>

    {/*Navbar Links*/}

    <Header/>

    {/*Navbar Links*/}
    <Switch>

    {/*default page*/}
    <Route exact path="/" component={Home}/>

    {/*<Home/>*/}
    <Route path="/home" component={Home}/>

    {/*<About/>*/}
    <Route path="/about" component={About}/>

    {/*<Services/>*/}
    <Route path="/services" component={Services}/>

    {/*<ItServices/>*/}
    <Route path="/Itservices" component={Itservices}/>

    {/*<Contact/>*/}
    <Route path="/contact" component={Contact}/>

    {/*<Myclass/>*/}
    <Route path="/Myclass" component={Myclass}/>

    {/*<Lifecycle/>*/}
    <Route path="/Lifecycle" component={Lifecycle}/>

    {/*<Restapi/>*/}
    <Route exact path="/Restapi" component={Restapi}/>

    {/*<View/>With Router Parameter*/}
    <Route exact path="/restapi/view/:idno" component={View}/>

    {/* <Edit/>*/}
    <Route exact path="/restapi/edit/:idno"component={Edit}/>

    {/*<ReactBootstrap/>*/}
    <Route exact path="/ReactBootstrap" component={ReactBootstrap} />

    {/*<Signup/>*/}
    <Route exact path="/Signup" component={Signup} />


    {/*Auto redirect to home componenet if invalid path from URL address bar */}
   
    <Redirect to="/home"/>

    {/*<pagenotfound/>*/}
    <Route component={Pagenotfound}/>
    </Switch>

    {/*Footer Section*/}
    <Footer/>

    {/*Footer Section*/}
    </BrowserRouter>)
}
export default Routings;