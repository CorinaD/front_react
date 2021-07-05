import { Component } from "react";

class Entry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entryTime: '00:00',
            exitTime: '00:00'
        };
    }

    render() {
        const {entryTime, exitTime} = this.state;

        return (
            {entryTime, exitTime}
        );

    }

}
export default Entry;