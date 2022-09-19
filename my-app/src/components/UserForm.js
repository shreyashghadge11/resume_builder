import React, { Component } from 'react';
import '../App.css';
import { spacing,sizing,positions } from '@mui/system';
import PersonalDetails from './PersonalDetails';
import Experience from './Experience';
import Projects from './Projects';
import Slider_ from './Slider';
import { Container } from '@mui/material';
import Education from './Education';
import Achievements from './Achievements';
import Success from './Success';



class UserForm extends Component {

    state = {

        step: 1,
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        skills: '',

        experience:[{organization:'',position:'',from:'',to:'',description:''}],

        projects:[{title:'',link:'',description:''}],

        education:[{school_university:'',degree:'',branch:'',marks:'',from:'',to:''}],

        achievements:[{description:''}],


        status: 0

    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    submitted = () => {
        const { status } = this.state;
        this.setState({
            status: status + 1
        });
    }



    handleChange = ({ target: { value, name } }) => {
        this.setState({ [name]: value })
    }

    handleChange2 = ({value,item}) => {
        if(value=='education'){
            this.setState({education:item.filter(i=>{return i})})
            // console.log(this.state.education)
        }
        else if(value=='experience'){
            this.setState({experience:item.filter(i=>{return i})})
            // console.log(this.state.experience)
        }
        else if(value=='projects'){
            this.setState({projects:item.filter(i=>{return i})})
            // console.log(this.state.experience)
        }
        else if(value=='achievements'){
            this.setState({achievements:item.filter(i=>{return i})})
            // console.log(this.state.experience)
        }
        
    }

    
    render() {
        const { step } = this.state;
        

        switch (step) {
            case 1:
                return (
                    <div className="App" sx={{mt:5,pt:5}}>
                        <Slider_ step={(step-1)*20}/>
                        <br/>
                        <Container className="container col-lg-11 mx-auto text-center mt-10" >

                            <PersonalDetails
                                values={this.state}
                                nextStep={this.nextStep}
                                
                                handleChange={this.handleChange}
                            />
                        </Container>
                        <br />
                    </div>
                );

            case 2:

                return (
                    <div className="App pt-5 mt-5">
                        <Slider_ step={(step-1)*20}/>
                        <br/>
                        <Container className="container col-lg-10 mx-auto text-center mt-10" >

                            <Education
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleChange2={this.handleChange2}
                            />
                        </Container>
                        <br />
                    </div>
                );

            case 3:

                return (
                    <div className="App pt-5 mt-5">
                        <Slider_ step={(step-1)*20}/>
                        <br/>
                        <Container className="container col-lg-10 mx-auto text-center mt-10" >

                            <Experience
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleChange2={this.handleChange2}
                            />
                        </Container>
                        <br />
                    </div>
                );

            case 4:

                return (
                    <div className="App pt-5 mt-5">
                        <Slider_ step={(step-1)*20}/>
                        <br/>
                        <Container className="container col-lg-10 mx-auto text-center mt-10" >

                            <Projects
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleChange2={this.handleChange2}
                            />
                        </Container>
                        <br />
                    </div>
                );


            case 5:

                return (
                    <div className="App pt-5 mt-5">
                        <Slider_ step={(step-1)*20}/>
                        <br/>
                        <Container className="container col-lg-10 mx-auto text-center mt-10" >

                            <Achievements
                                values={this.state}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleChange2={this.handleChange2}
                            />
                        </Container>
                        <br />
                    </div>
                );

            case 6:

                return (
                    <div className="App pt-5 mt-5">
                        <Slider_ step={(step-1)*20}/>
                        <br/>
                        <Container className="container col-lg-10 mx-auto text-center mt-10" >

                            <Success
                                values={this.state}
                                prevStep={this.prevStep}
                                
                            />
                        </Container>
                        <br />
                    </div>
                );

        }
    }
}

export default UserForm;
