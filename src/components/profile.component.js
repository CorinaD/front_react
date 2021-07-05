import React, {Component} from "react";
import axios from "axios";
import ProfilePicture from './images/default-profile-picture.png';
import '../css/profile.css';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '', 
            enabled: false, 
            insideBuilding: false
        };
    }

    isEnabled()
    {
        if (this.state.enabled)
        {
            return "Enabled";
        } else {
            return "No";
        }
    }

    isInside()
    {
        if (this.state.insideBuilding)
        {
            return "Yes";
        } else {
            return "No";
        }
    }

    componentDidMount(){
        this.getUser();
    }

    getEmail(){
       return localStorage.getItem('user');
    } 

    getUser()
    {
        console.log(this.state);
        axios
        .get("/api/v1/user/viewAll/"+ this.getEmail())
        .then(response => {
            console.log(response.data);
            console.log(response.status);
            this.setState({ firstName: response.data.firstName})
            this.setState({ lastName: response.data.lastName})
            this.setState({ email: response.data.email})
            this.setState({ enabled: response.data.enabled})
            this.setState({ insideBuilding: response.data.insideBuilding})

        })
        .catch ( error => {
            console.log(error);
        })
    }

    render(){
        return ( 
            <div class="entries-wrapper">             



    <div class="details">
      <img src={ProfilePicture}  class="profile-pic" alt="profilePicture" /> 
      <h1 class="heading">{this.state.firstName}  {this.state.lastName}</h1>
      <div class="location">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
</svg>
      </div>
      <div class="stats">
        <div class="col-4">
          <h4> Email </h4>
          <p> {this.state.email} </p>
        </div>

        <div class="col-4">
          <h4> Inside the Building </h4>
          <p> {this.isInside()} </p>
        </div>

        <div class="col-4">
          <h4> Enabled </h4>
          <p> {this.isEnabled()} </p>
        </div>



      </div>
    </div>

                 
            </div>
          
        );
    }
      
}

export default Profile;