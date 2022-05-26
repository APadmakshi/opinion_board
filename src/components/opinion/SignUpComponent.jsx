import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

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
                <h1>Sign Up</h1>
                <div className="container">
                Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Email: <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                DOB: <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.signUpClicked}>Sign Up</button>
                </div>
                </div>
        )
    }
}

export default SignUpComponent