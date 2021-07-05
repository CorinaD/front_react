import React, { Component } from "react";
import axios from "axios";
import "react-table-6/react-table.css";

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

    getEntries()
    {
        console.log(this.state);
        axios
        .get("/api/v1/entries/viewAll/1")
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
            <div className="entries-wrapper">
                        
            <table className="table-bordered"  >
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Entry Time </th>
                         <th> Exit Time </th>
                         <th> Duration </th>
                    </tr>
                </thead>
                <tbody> {this.state.entries.map(function (item, index){
                    return (
                     <tr key={index}>
                     <td>{index}</td>    
                     <td>{item.entryTime}</td>
                     <td> {item.exitTime} </td>
                     <td> 0 </td>
                    </tr>
                    );
                })} 
                </tbody>
            </table>

            </div>
        );
    }
}


export default AllEntries;