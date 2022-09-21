//index.js-> Root_Module For Entire Project
import React from 'react';
import ReactDOM from 'react-dom';


//import BOOTSTRAP Into React
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import import Routings
import Routings from './Components/Routings'

ReactDOM.render(<Routings/>, document.getElementById('root'))




