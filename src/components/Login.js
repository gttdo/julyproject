import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div className="login">
                <h2 className="login--header heading-2">Welcome back!</h2>
                <form action="#" className="login--form">
                    <input className="login--form_name" placeholder="username or email"/>
                    <input className="login--form_password" placeholder="password"/>
                    <button className="login--form_btn btn-1">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;