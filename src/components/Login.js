import React, {Component} from 'react';

class Login extends Component{
    state={
        username: '',
        password: ''
    }
    loginEventHandler = (event) => {
        event.preventDefault();
        if(this.state.username === 'gmoney' && this.state.password === 'g12345'){
            document.getElementById("profile").classList.remove("nav-item_profile");
            document.getElementById("logout").classList.remove("nav-item_logout");
            document.getElementById("signup").classList.add("nav-item_signup");
            document.getElementById("login").classList.add("nav-item_login");
        }
    }

    usernameInputHandler = (event)=>{
        let newEvent = event.target.value;
        setTimeout(()=>{
            this.setState({username: newEvent})
        }, 1000);
    }

    passwordInputHandler = (event)=>{
        let newEvent = event.target.value;
        setTimeout(()=>{
            this.setState({password: newEvent})
        }, 1000);
    }
    render(){

        return(
            <div className="login">
                <h2 className="login--header heading-2">Welcome back!</h2>
                <form action="#" className="login--form">
                    <input 
                        className="login--form_name" 
                        placeholder="username or email"
                        onChange={this.usernameInputHandler}/>
                    <input 
                        className="login--form_password" 
                        placeholder="password"
                        onChange={this.passwordInputHandler}/>
                    <button 
                        type="submit" 
                        className="login--form_btn btn-1" 
                        onClick={this.loginEventHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;