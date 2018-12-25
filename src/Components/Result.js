import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="col-ms-12">
                    <p>Color: red - font-size: 15px; </p>
                </div>
                <div id="content">
                    Noi dung setting
                </div>
            </div>
        );
    }
}

export default Result;