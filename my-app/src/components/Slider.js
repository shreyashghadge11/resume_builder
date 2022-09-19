// import './App.css';
import React, { Component } from 'react';
import { spacing,sizing,positions } from '@mui/system';
import {Slider} from '@mui/material';
// import UserForm from './components/UserForm'



function Slider_({step}){


   const marks = [
    {
      value: 0,
      label: 'Personal Details',
    },
    {
      value: 20,
      label: 'Education',
    },
    {
      value: 40,
      label: 'Experience',
    },
    {
      value: 60,
      label: 'Projects',
    },
    {
      value: 80,
      label: 'Achievements',
    },
    {
      value: 100,
      label: 'Download Resume',
    }
  ];

  const getValue = (value) => {
    return `${value}`;
  };

  // render() {
    return (
      
        <div sx={{mx:'auto'}}>
          <Slider sx={{width: '75%',textColor:'black',pointerEvents:'none'}}
            // disabled
            aria-label="Custom marks"
            value={step}
            getAriaValueText={getValue}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
            // color="secondary "
          />
        </div>  
        
    );
  }
// };

export default Slider_;
