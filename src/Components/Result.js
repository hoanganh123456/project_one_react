import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    setTextColor() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        }
    }
    render() {
        return (
            <div className="result">
                <div className="col-md-12">
                    <p>Color: {this.props.color} - font-size: { this.props.fontSize }px </p>
                </div>
                <div className="col-md-12" id="content" style={this.setTextColor()}>
                    Noi dung setting
                </div>
            </div>
        );
    }
}

export default Result;