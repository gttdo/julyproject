import React, {Component} from 'react';
import './css/style.css';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';

// Components
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  state = {
    home: true,
    signup: false,
    login: false,
    username: '',
    password: ''
  }
  // 7/23/2020 need to remove state from login component and added to app.js
  // username and password needed in state inside app so it can be accessed by header.js and login.js

  homeEventHandler = () => {
    this.setState({
      home: true,
      signup: false,
      login: false
    })
  }

  signupEventHandler = () => {
    this.setState({
      home: false,
      signup: true,
      login: false
    })
  }

  loginEventHandler = () => {
    this.setState({
      home: false,
      signup: false,
      login: true
    })
  }
  render(){
    let home;
    let signup;
    let login;
    if(this.state.home){
      home = <Home/>
    }
    if(this.state.signup){
      signup = <Signup/>
    }
    if (this.state.login){
      login =  <Login/>
    }
    return(
      <div className="container">
        <Header 
          signupRedirect={this.signupEventHandler} 
          loginRedirect={this.loginEventHandler}
          homeRedirect={this.homeEventHandler}/>
        <Sidebar/>
        {home}
        {signup}
        {login}
        <Footer/>
      </div>
    )
  }
}

export default App;
