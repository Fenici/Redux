import React, { Component } from 'react';
import './App.css'
import {connect} from 'react-redux';
import {changeUserName} from './actions'
import {loggingIn} from './actions'
import {loggingOut} from './actions'
class App extends Component {
  handleClick = () => {
    // dispatch an event
    // change username in store
    const user = { userName: "Xiao Hei" };
    this.props.changeUserName(user);
  };

  handleAdminClick =()=>{
    const user = {userName:'Admin'}
    this.props.changeUserName(user);

  }

  handleLogOut = ()=>{
    // const currentState ={status:}
    this.props.loggingOut() 
    console.log(this.props.auth);
    
  }

  // handleLogIn=()=>{
  //   this.props.loggingIn();
  // }

  componentDidMount() {
    this.props.loggingIn()
  }

  render() {
    return (
      <div className="App-header">
        Hi {this.props.myUserName}
        <br />
        <button onClick={this.handleClick}>Click Me</button>
  
        <button onClick={this.handleAdminClick}>Admin</button>
      
        <div className="App-logo" style={{marginTop:'50px'}}>
          {this.props.auth}
          <hr></hr>
          <button onClick={this.handleLogOut}>{this.props.auth}</button>
        </div>

      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myUserName: state.user.userName,
    auth:state.login.status
  }
} 
export default connect(mapStateToProps, { changeUserName, loggingIn, loggingOut})(App);
