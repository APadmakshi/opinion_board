import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

class SignUpComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            name: '',
            email: '',
            dob: ''
        }
        this.handleChange = this.handleChange.bind(this)
        //this.signupClicked = this.signupClicked.bind(this)
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    signUpClicked() {
        
    }
    

    render() {
        return(
            <div>
                <br></br>
                <h1 style={{textAlign: "center", color:"green"}}>Sign Up</h1><br></br><br></br>
                <div style={{textAlign: "center"}} className="container">
                <span style={{marginRight: "50px"}}>Name: </span><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br></br><br></br>
                <span style={{marginRight: "11px"}}>User Name: </span><input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br></br><br></br>
                <span style={{marginRight: "54px"}}>Email: </span><input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br></br><br></br>
                <span style={{marginRight: "61px", marginLeft: "-50px"}}>DOB: </span><input type="date" name="dob" value={this.state.dob} onChange={this.handleChange}/><br></br><br></br>
                <span style={{marginRight: "23px"}}>Password: </span><input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br></br><br></br><br></br>
                {/* <Router> */}
                    <button className="btn btn-success" onClick={this.signUpClicked}>
                        <Link style={{color: 'white'}} to={{pathname: "LoginComponent"}}>Sign Up</Link>
                    </button>
                {/* </Router> */}
                {/* <button className="btn btn-success" onClick={this.signUpClicked}>Sign Up</button><br></br><br></br> */}
                </div>
                </div>
        )
    }
}

export default SignUpComponent