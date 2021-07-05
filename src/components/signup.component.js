import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
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
        .post("/api/v1/registration", this.state)
        .then(response => {
            console.log(response);
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            window.location = "/sign-in";
        })
        .catch ( error => {
            console.log(error);
        })
    }  

    render() {
        const {firstName, lastName, email, phone, password} = this.state;
        return (
            <div className="auth-wrapper "> 
            <form  className="auth-inner"  onSubmit={this.onSubmitHandler}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstName"  value = {firstName} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastName"  value = {lastName} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"  value = {email} onChange={this.changeHandler}/>
                </div>
                
                <div className="form-group">
                    <label>Phone number</label>
                    <input type="tel" className="form-control" placeholder="Phone number" name="phone"  value = {phone} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"  value = {password} onChange={this.changeHandler}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
            </div>

        );
    }
}