import React, { Component, useState } from 'react'
import { Button,Alert,Fab } from '@mui/material';
import axios from 'axios';
import { saveAs } from 'file-saver';




function Success (props) {
    const { values } = props;
    const [error,setError] = useState('');

    


    const back = e => {
        e.preventDefault();
        // console.log(education);
        
        props.prevStep();
    };

    const download =  e => {
        e.preventDefault();
        // console.log(education);
        let data = values
        axios.post('/create-pdf', data)
            .then( e => 
            {   console.log(e)
                axios.get('/fetch-pdf', { responseType: 'blob' })
                .then((res) => {
                    console.log(res)
                    const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
                    saveAs(pdfBlob, 'Resume.pdf');
                })
                .catch(e=>console.log(e,'fetch'))
            
            }
            )
            .catch(e=>console.log(e,'create',e.config.data))
            

    };


    


    

    return (
        <div>
            <div className="card-body">

                    <h3 className="card-title">Download Your Resume :{')'}</h3>
                    <br />
            </div>
            
            
            {error.length ?
            <Alert severity="error" sx={{mx:'auto',width:'30ch',mt:2}}>
                {error}
            </Alert>:null
            }
            <div>
                <Button variant="contained" sx={{ml:'auto',width:'25ch',mt:2,mr:2}} onClick={back} >Back</Button>

                <Button variant="contained" sx={{ml:'auto',width:'25ch',mt:2,ml:2}} onClick={download} >Download Resume</Button>

            </div>
        </div>
    )
    
}

export default Success;
