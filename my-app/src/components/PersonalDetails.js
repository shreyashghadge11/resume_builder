import React, { Component, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button,Alert } from '@mui/material';
import validator from 'validator'



function PersonalDetails (props) {

    

    // continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // };

    // Error_ = '';
      
    // render() {
        const { values, handleChange, nextStep } = props;
        const [error,setError] = useState('');

        const continue_ = e => {
            e.preventDefault();
            const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;


            if(values.name.length==0){
                setError('Name Required');
                // this.Error_ = Error;
                return
            }
            else if(!regex.test(values.mobile_no)){
                setError('Enter Valid Mobile No')
                return
            }
            else if(!(/\S+@\S+\.\S+/.test(values.email))){
                setError('Enter Valid Email')
                return
            }
            else if(!validator.isURL(values.linkedin)){
                setError('Enter Valid Linked In URL')
                return
            }
            else if(!validator.isURL(values.github)){
                setError('Enter Valid Github URL')
                return
            }
            setError('');
            nextStep();
        };
    

        return (
            <div>
                <div className="card-body">

                        <h3 className="card-title">Personal Info</h3>
                        <br />
                    </div>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                        <TextField
                        required
                        //error
                        id="outlined-required"
                        label="Name"
                        name='name'
                        defaultValue={values.status === 1 ? '' : values.name}
                        onChange={handleChange}
                        sx={{width:'40ch'}}
                        />
                    
                        <TextField
                        required
                        //error
                        id="outlined-required"
                        label="Email"
                        name='email'
                        defaultValue={values.status === 1 ? '' : values.email}
                        onChange={handleChange}
                        sx={{width:'40ch'}}
                        />
                    
                        <TextField
                        required
                        //error
                        id="outlined-required"
                        label="Mobile No"
                        name='mobile_no'
                        defaultValue={values.status === 1 ? '' : values.mobile_no}
                        onChange={handleChange}
                        sx={{width:'40ch'}}
                        />
                    </div>
                    <div>
                        <TextField
                        required
                        //error
                        id="outlined-required"
                        label="Linked In"
                        name='linkedin'
                        defaultValue={values.status === 1 ? '' : values.linkedin}
                        onChange={handleChange}
                        sx={{width:'60ch'}}
                        />
                    
                        <TextField
                        required
                        //error
                        id="outlined-required"
                        label="Github"
                        name='github'
                        defaultValue={values.status === 1 ? '' : values.github}
                        onChange={handleChange}
                        sx={{width:'60ch'}}
                        />
                    </div>
                    <div>
                        <TextField
                        required
                        //error
                        id="outlined-required"
                        label="Skills (Comma separated)"
                        name='skills'
                        defaultValue={values.status === 1 ? '' : values.skills}
                        onChange={handleChange}
                        sx={{width:'120ch'}}
                        />
                    </div>
                </Box>
                {error.length ?
                <Alert severity="error" sx={{mx:'auto',width:'30ch',mt:2}}>
                    {error}
                </Alert>:null
                }

                <Button variant="contained" sx={{ml:'auto',width:'30ch',mt:2}} onClick={continue_} >Next</Button>
            </div>
        )
    // }
}


export default PersonalDetails;
