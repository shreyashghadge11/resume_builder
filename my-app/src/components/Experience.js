import React, { Component, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button,Alert,Fab } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';


function Experience (props) {
    const { values, handleChange, handleChange2 } = props;
    const [experience,setExperience] = useState(values.experience);
    const [error,setError] = useState('');

    const checkError = (arr) => {
        let error_ = ''
        let ret = false
        arr.map(item=>{
            if(item.organization=='' || item.position=='' || 
            item.description=='' || item.from=='' || item.to==''){
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
        if(checkError(experience)){return}
        else{
            setError('')
        }
        handleChange2({value:'experience',item:experience})
        props.prevStep();
    };

    const continue_ = e => {
        e.preventDefault();
        if(checkError(experience)){return}
        else{
            setError('')
        }
        handleChange2({value:'experience',item:experience})
        props.nextStep();
    }


    


    const handleAdd = (e) => {
        
        setExperience(experience => [...experience, {organization:'',position:'',from:'',to:'',description:''}])
    }

    

    const handleChangeExperience = (e) => {
        
        const arr_ = e.target.name.split(" ")
        let name = arr_[0] ;
        let ind = parseInt(arr_[1]);
        // console.log(name,ind)

        setExperience(experience => experience.filter((item,i)=> {
            if(i!=ind){return item}
            let new_item = item
            if(name=='organization'){
                new_item.organization = e.target.value;
                return new_item
            }
            if(name=='position'){
                new_item.position = e.target.value;
                return new_item
            }
            if(name=='description'){
                new_item.description = e.target.value;
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

                    <h3 className="card-title">Experience</h3>
                    <br />
            </div>
            {experience.map((item,i) => {
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
                            label="Organization"
                            name={'organization ' + i.toString()}
                            defaultValue={values.status === 1 ? '' : item.organization}
                            onChange={handleChangeExperience}
                            sx={{width:'60ch'}}
                            />
                        
                            <TextField
                            required
                            //error
                            id="outlined-required"
                            label="Position"
                            name={'position ' + i.toString()}
                            defaultValue={values.status === 1 ? '' : item.position}
                            onChange={handleChangeExperience}
                            sx={{width:'60ch'}}
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
                            onChange={handleChangeExperience}
                            sx={{width:'40ch'}}
                            />
                        
                            <TextField
                            required
                            //error
                            id="outlined-required"
                            label="To"
                            name={'to ' + i.toString()}
                            defaultValue={values.status === 1 ? '' : item.to}
                            onChange={handleChangeExperience}
                            sx={{width:'40ch'}}
                            />
                            
                        </div>
                        <div>
                            <TextField
                                required
                                //error
                                id="outlined-required"
                                multiline={true}
                                minRows={3}
                                label="Description"
                                name={'description ' + i.toString()}
                                defaultValue={values.status === 1 ? '' : item.description}
                                onChange={handleChangeExperience}
                                sx={{width:'80ch'}}
                                />
                            <Fab color='primary' aria-label="add" onClick={handleAdd} sx={{ml:5,mr:5,mt:2,width:'40px',height:'40px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" > <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>                            
                                </Fab>
                                {i!=0 ? 
                                    <Fab color='' aria-label="add" name={i} onClick={() => {
                                        setExperience(experience => experience.filter((item_,ind)=> {if(i!=ind){return item_}}))
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

export default Experience;
