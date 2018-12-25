import React, { Component } from 'react';
import  ColorPicker from './Components/ColorPicker';
// import  SizeSetting from './Components/SizeSetting';
import  Result from './Components/Result';
// import  Reset from './Components/Reset';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {  
        color : 'red',
        fontSize: 15
      }
    }
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color}/>
            <div className="col-sm-6">
            </div>
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
