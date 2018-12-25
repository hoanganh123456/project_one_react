import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : ['blue','red','green','#ccc']
        }
    }
    showColor = (color) => {
        return {
            backgroundColor : color,
            width: 50,
            height: 50,
            marginRight: 10
        }
    }   
    
    render() {
        var eleColor = this.state.color.map((color,index) => {
            return (
                <button className="card-text" key={index} style={this.showColor(color)}></button>
            )
        })
        return (
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-header">
                        Color Picker
                    </div>
                    <div className="card-body colorButton">
                       { eleColor }
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;

