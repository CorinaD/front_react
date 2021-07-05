import React, { Component } from "react";
import axios from "axios";
import "react-table-6/react-table.css";
import '../css/entries.css';

var entryTime = 0;
var exitTime = 0;
var duration = 0;

class AllEntries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries : [],
            response: ''
        };
    }

    componentDidMount() {
        this.getEntries();
    }

    getEmail(){
        return localStorage.getItem('user');
     } 

    static toDate(ms) {
        var d = new Date(ms);    
        return d.toLocaleString();; 
    }

    static msToHMS( ms ) {
        var seconds = ms / 1000;
        var hours = parseInt( seconds / 3600 ); 
        seconds = seconds % 3600; 
        var minutes = parseInt( seconds / 60 ); 
        seconds = Math.round (seconds % 60);

        return ( hours + "h "+ minutes + "m "+ seconds + "s" );
    }

    getEntries()
    {
        console.log(this.state);
        axios
        .get("/api/v1/entries/viewAll/" + this.getEmail())
        .then(response => {
            console.log(response.data);
            let list = response.data;
            console.log(response.status);
            this.setState({response: response.data})
            this.setState({ entries: list})
        })
        .catch ( error => {
            console.log(error);
        })
    }

    render() {

        return (
            <div class="entries-wrapper">
                < div class="table-container">     
                    <h4 class="spacing"> <em> History </em> </h4>   
                    <table className="table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Entry Time </th>
                                <th> Exit Time </th>
                                <th> Duration </th>
                            </tr>
                        </thead>
                        <tbody> {this.state.entries.map(function (item, index){
                                entryTime = item.entryTime;
                                exitTime =  item.exitTime;
                                duration = exitTime - entryTime;
                                return (
                                    <tr key={index}>
                                        <td> {index} </td>       
                                        <td> {(entryTime !== 0) ? (AllEntries.toDate(entryTime)) :  (<p> ----- </p>)} </td>  
                                        <td> {(exitTime !== 0) ? (AllEntries.toDate(exitTime)) :  (<p> ----- </p>)} </td>
                                        <td> {(duration >= 0 ) ? (AllEntries.msToHMS(duration)) : ( <p> ----- </p>)} </td>
                                    </tr>
                                    );
                                })
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default AllEntries;