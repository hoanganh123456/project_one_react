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
    setActiveColor(color){
      this.props.onReciveColor(color);
    }   
    
    render() {
        var eleColor = this.state.color.map((color,index) => {
            return (
                <button className="card-text" 
                    key={index} 
                    style={this.showColor(color)}
                    className={this.props.color === color ? 'active' : ''}
                    onClick={() => this.setActiveColor(color)}
                >
                </button>
            )
        })
        return (
            <div className="col-sm-6">
                <div className="card mt-3">
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

