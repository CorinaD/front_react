import React, {Component} from "react";
import '../css/homepage.css';

class HomePage extends Component {
    render(){

        return ( 
            <div class="entries-wrapper"> 
                <div class="title">              
                    <h1>Track access</h1>
                </div>

                <div class="welcomeMessage"> 
                  <h4> Wellcome </h4>

                  {
                    ( localStorage.getItem('isLogged') ==='true' ) ? ( 
                        <p> <em> {localStorage.getItem('user')} </em></p> 
                    )
                    : (
                        <div> 
                           <p class="big"> You do not seem logged in. </p> 
                           <p class="big"> In order to use all the features provide by this app, please login or register. </p> 
                        </div>
                    )
                    
                    }
                </div> 
                   
                <div class ="about">
                    <h4> About us </h4>
                    <p calss="big"> Our company provide personalized services for builds safety. <br>
                    </br> We provide also physhic dispositives for monitorise the access and  <br></br>we can customize the web appplication for each build according to customer needs. </p>
                    <p calss="big"> <em> "This appplication lead to another level builds safety." (Robert Downey Jr.) </em></p>
                    <p calss="big">  If you want more information about our company call at  <em> 0754286111 </em>. </p>
                </div>
        </div>

    
        );
        }

        
}

export default HomePage;