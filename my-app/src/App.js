import './App.css';
import React, { Component } from 'react';
import { spacing,sizing,positions } from '@mui/system';
import {Slider} from '@mui/material';
import UserForm from './components/UserForm'



function App(){


   

  // render() {
    return (
      <div className="App" sx={{mt:20}}>
        <div sx={{mx:'auto',mt:10}}>
          <h1 sx={{mt:'100px'}}><b>Let's generate your Resume!</b></h1>
          <p className="lead"><b>Please provide accurate and clear description wherever necessary.</b></p>
        </div>  
        <UserForm/>
      </div>
    );
  }
// };

export default App;
