import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef(); 
    // this.OnclickHandler = this.OnclickHandler.bind(this);   
  }

  OnclickHandler(){
    this.textInput.current.focus();
  }
  componentDidMount(){
    console.log('did mount');
  }

  componentDidUpdate(){
    console.log('did update')
  }

  componentWillUnmount(){
    console.log('will unMount')
  }

  render(){
    return(
      <div className="app">
        <input type="text" ref={this.textInput} />
        <input type="button" value="Submit" onClick={() => this.OnclickHandler()} />
      </div>
    )
  }
}

export default App;
