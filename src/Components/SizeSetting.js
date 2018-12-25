import React, { Component } from 'react';

class SizeSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    setSizeText(value) {
        this.props.onSizeSetting(value);
    }
    render() { 
        return (
                <div className="card mt-3">
                    <div className="card-header">
                        Size: { this.props.fontSize }px
                    </div>
                    <div className="card-bod content-size">
                       <button type="button" className="btn btn-primary" onClick={ () => this.setSizeText(-2) }>Giảm</button>
                       <button type="button" className="btn btn-primary" onClick={ () => this.setSizeText(2) }>Tăng</button>
                    </div>
                </div>
            
        );
    }
}
 
export default SizeSetting;