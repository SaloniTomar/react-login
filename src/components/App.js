import React, { Component } from 'react';

import createBrowserHistory from 'history/createBrowserHistory';
import {bake_cookie} from 'sfcookies';
import '../App.css';

const cookie_key = 'ID';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            LoginId:'',
            Password:'',
            errorMessage:''
        };
          this.validate=this.validate.bind(this);
    }
    
     history = createBrowserHistory();

    validate(e) {
      if(this.state.LoginId ==="user"&& this.state.Password === "user"){
        this.setState({
          errorMessage: ''
          });
        bake_cookie(cookie_key, this.state.LoginId);
        this.history.push("/loggedin");
      }
      else{
        e.preventDefault();
        this.setState({
          errorMessage: 'Enter Valid Credentials'
          });
      }
    }

    render() {
      return (
        <div className="App">
        <h1 className="App-header"> Login Page</h1>
        
        <form className="Form">
          <a className="FormField">Login ID:</a>
          <input className="FormField" type="text" onChange={event=>this.setState({ LoginId: event.target.value })}/><br/>
          <a className="FormField">Password:</a>
          <input className="FormField" type="password" onChange={event=>this.setState({ Password: event.target.value })}/>
          <hr/>
          <div className="error">{this.state.errorMessage}</div>
         <button type='submit' onClick={this.validate} >Submit</button>
        </form>
        </div>
      );
    }
  }