import React, { Component, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button,Alert,Fab } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';


function Education (props) {
    const { values, handleChange, handleChange2 } = props;
    const [education,setEducation] = useState(values.education);
    const [error,setError] = useState('');

    const checkError = (arr) => {
        let error_ = ''
        let ret = false
        arr.map(item=>{
            if(item.school_university=='' || item.branch=='' || 
            item.degree=='' || item.marks=='' || item.from=='' || item.to==''){
                error_ = 'Incomplete Fields!'
                ret = true
            }
        })
        setError(error_);
        return ret
    }


    const back = e => {
        e.preventDefault();
        // console.log(education);
        if(checkError(education)){return}
        else{
            setError('')
        }
        handleChange2({value:'education',item:education})
        props.prevStep();
    };

    const continue_ = e => {
        e.preventDefault();
        if(checkError(education)){return}
        else{
            setError('')
        }
        handleChange2({value:'education',item:education})
        props.nextStep();
    }


    


    const handleAdd = (e) => {
        
        setEducation(education => [...education, {school_university:'',degree:'',branch:'',marks:'',from:'',to:''}])
    }

    

    const handleChangeEducation = (e) => {
        
        const arr_ = e.target.name.split(" ")
        let name = arr_[0] ;
        let ind = parseInt(arr_[1]);
        // console.log(name,ind)

        setEducation(education => education.filter((item,i)=> {
            if(i!=ind){return item}
            let new_item = item
            if(name=='school_university'){
                new_item.school_university = e.target.value;
                return new_item
            }
            if(name=='degree'){
                new_item.degree = e.target.value;
                return new_item
            }
            if(name=='branch'){
                new_item.branch = e.target.value;
                return new_item
            }
            if(name=='marks'){
                new_item.marks = e.target.value;
                return new_item
            }
            if(name=='from'){
                new_item.from = e.target.value;
                return new_item
            }
            if(name=='to'){
                new_item.to = e.target.value;
                return new_item
            }
            
        }))
    } 


    return (
        <div>
            <div className="card-body">

                    <h3 className="card-title">Education</h3>
                    <br />
            </div>
            {education.map((item,i) => {
                // console.log(i)
                return(
                    <Box key={i}
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
                            label="School/University"
                            name={'school_university ' + i.toString()}
                            defaultValue={values.status === 1 ? '' : item.school_university}
                            onChange={handleChangeEducation}
                            sx={{width:'25ch'}}
                            />
                        
                            <TextField
                            required
                            //error
                            id="outlined-required"
                            label="Degree"
                            name={'degree ' + i.toString()}
                            defaultValue={values.status === 1 ? '' : item.degree}
                            onChange={handleChangeEducation}
                            sx={{width:'25ch'}}
                            />
                        
                            <TextField
                            required
                            //error
                            id="outlined-required"
                            label="Branch"
                            name={'branch ' + i.toString()}
                            defaultValue={values.status === 1 ? '' : item.branch}
                            onChange={handleChangeEducation}
                            sx={{width:'25ch'}}
                            />
                            <TextField
                            required
                            //error
                            id="outlined-required"
                            label="Marks/CGPA"
                            name={'marks ' + i.toString()}
                            defaultValue={values.status === 1 ? '' : item.marks}
                            onChange={handleChangeEducation}
                            sx={{width:'25ch'}}
                            />
                        </div>
                        <div>
                            <TextField
                            required
                            //error
                            id="outlined-required"
                            label="From"
                            name={'from ' + i.toString()}
                            defaultValue={values.status === 1 ? '' : item.from}
                            onChange={handleChangeEducation}
                            sx={{width:'30ch'}}
                            />
                        
                            <TextField
                            required
                            //error
                            id="outlined-required"
                            label="To"
                            name={'to ' + i.toString()}
                            defaultValue={values.status === 1 ? '' : item.to}
                            onChange={handleChangeEducation}
                            sx={{width:'30ch'}}
                            />
                            <Fab color='primary' aria-label="add" onClick={handleAdd} sx={{ml:5,mr:5,mt:2,width:'40px',height:'40px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" > <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>                            
                            </Fab>
                            {i!=0 ? 
                                <Fab color='' aria-label="add" name={i} onClick={() => {
                                    setEducation(education => education.filter((item_,ind)=> {if(i!=ind){return item_}}))
                                }} sx={{mt:2,width:'40px',height:'40px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>                                
                                </Fab> : null 
                            }
                        </div>
                        <div>
                            
                        </div>
                        <hr/>
                    </Box>
                )
            })}
            
            {error.length ?
            <Alert severity="error" sx={{mx:'auto',width:'30ch',mt:2}}>
                {error}
            </Alert>:null
            }
            <div>
                <Button variant="contained" sx={{ml:'auto',width:'25ch',mt:2,mr:2}} onClick={back} >Back</Button>

                <Button variant="contained" sx={{ml:'auto',width:'25ch',mt:2,ml:2}} onClick={continue_} >Next</Button>

            </div>
        </div>
    )
    
}

export default Education;
