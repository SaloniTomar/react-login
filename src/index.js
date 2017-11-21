import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import CheckboxWithLabel from './components/Extra';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  import LoggedIn from './components/LoggedIn';
  
  
  import './App.css';
    
  class Root extends Component {
    render() {
      return (
        <Router>
       <div>
         <Route exact path="/" component={App}/>
         <Route path="/loggedin" component={LoggedIn}/>
       </div>
     </Router>
      );
    }
  }

ReactDOM.render(<CheckboxWithLabel />, document.getElementById('root'));
