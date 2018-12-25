import React, { Component } from 'react';

class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    setDefaultSize = () => {
        this.props.onDefaultText(true);
    }
    render() { 
        return (  
            <div>
                <button type="button" className="btn btn-danger mt-1" onClick={ () => this.setDefaultSize() }>Reset</button>
            </div>
        );
    }
}
 
export default Reset;