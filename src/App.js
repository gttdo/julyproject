import React, {Component} from 'react';
import './css/style.css';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';

// Components
import Signup from './components/Signup';
import Login from './components/Login';

class App extends Component {
  state = {
    signup: false,
    login: true
  }

  signupEventHandler = () => {
    this.setState({
      signup: true,
      login: false
    })
  }

  loginEventHandler = () => {
    this.setState({
      signup: false,
      login: true
    })
  }
  render(){
    let signup;
    let login;
    if(this.state.signup){
      signup = <Signup/>
    }
    if (this.state.login){
      login =  <Login/>
    }
    return(
      <div className="container">
        <Header signupRedirect={this.signupEventHandler} loginRedirect={this.loginEventHandler}/>
        <Sidebar/>
        {signup}
        {login}
        <Footer/>
      </div>
    )
  }
}

export default App;
