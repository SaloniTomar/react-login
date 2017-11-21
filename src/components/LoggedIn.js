import React, { Component } from 'react';
import {read_cookie, delete_cookie} from 'sfcookies';
import '../App.css';

const cookie_key = 'ID';

class LoggedIn extends Component {
  constructor(props){
      super(props);
        this.logout = this.logout.bind(this);
        this.state={
          LoginId:'',
          UserName:''
        }
  }

  componentDidMount() {
    this.setState({ 
      LoginId : read_cookie(cookie_key),
     });
  }

  logout() {
      this.props.history.push({pathname: "/"});
      delete_cookie(cookie_key);
  }


  render() {
    return (
      <div className="App">
      <p className="App-title">Welocome  {this.state.LoginId}, you have successfully logged in.</p>
      <div class="dropdown">
      <span> {this.state.LoginId}</span>
      <div class="dropdown-content">
         <p className='logoutButton' onClick={this.logout}>Logout</p>
      </div>
    </div>
    </div>
    );
  }
}
export default LoggedIn;