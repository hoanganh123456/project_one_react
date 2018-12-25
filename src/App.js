import React, { Component } from 'react';
import  ColorPicker from './Components/ColorPicker';
// import  SizeSetting from './Components/SizeSetting';
import  Result from './Components/Result';
// import  Reset from './Components/Reset';
import './App.css';
import SizeSetting from './Components/SizeSetting';
import Reset from './Components/Reset';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {  
        color : 'red',
        fontSize: 15
      }
      this.onSetColor = this.onSetColor.bind(this);
      this.onSetSize = this.onSetSize.bind(this);
      this.onSetDefault = this.onSetDefault.bind(this);
    }
  onSetColor = (params) => {
    this.setState({
      color : params
    })
  }
  onSetSize = (value) => {
    this.setState({
      fontSize: (this.state.fontSize + value) >= 8 && (this.state.fontSize + value) <=36 ? this.state.fontSize + value : this.state.fontSize
    })
  } 
  onSetDefault = (value) => {
    if (value) {
      this.setState({
        color : 'red',
        fontSize: 15
      })
    } 
  }
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onReciveColor={ this.onSetColor }/>
            <div className="col-sm-6">
                <SizeSetting fontSize={ this.state.fontSize } onSizeSetting={ this.onSetSize }/>
                <Reset onDefaultText={ this.onSetDefault }/>
            </div>
          <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    );
  }
}

export default App;
