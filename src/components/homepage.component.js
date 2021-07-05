import React, {Component} from "react";
import It from './images/IT-System-Integration.png';

class HomePage extends Component {
    render(){

        return ( 
            <div class="entries-wrapper"> 
                <div>

                </div>
                  <h3>Track access</h3>
                  <p> Wellcome {localStorage.getItem('user')} </p>

                <div> 
                <div> 
                    <img src={It}  alt="fundalPicture" /> 
                </div>

                </div>


            </div>
          

        );
        }

        
}

export default HomePage;