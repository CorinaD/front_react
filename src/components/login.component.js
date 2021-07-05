import React, { Component } from "react";
import axios from "axios";
import '../App.css';

class Login extends Component {

    userEmail;

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler = e =>
    {
        e.preventDefault();
        console.log(this.state);
        axios
        .post("/api/v1/login", this.state)
        .then(response => {
            console.log(response);
            localStorage.setItem('user', this.state.email);
            localStorage.setItem('isLogged', true);
            window.location = "/home";
        })
        .catch ( error => {
            console.log(error);
        })
    }  

    render() {
        const {email, password} = this.state;
        return (
            <div className="auth-wrapper "> 
            <form  className="auth-inner" onSubmit={this.onSubmitHandler}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"  value = {email} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value = {password}  onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign In</button>

                <p className="forgot-password text-right">
                    Forgot <a href="*">password?</a>
                </p>

            </form>    
            </div>          
        );
    }
}

export default Login;