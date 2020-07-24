import React, {Component} from 'react';

class Header extends Component {
    showSidebar = () => {
        document.getElementById("sidebar").classList.toggle('active');
    }

    logoutEventHandler = () => {
            document.getElementById("profile").classList.add("nav-item_profile");
            document.getElementById("logout").classList.add("nav-item_logout");
            document.getElementById("signup").classList.remove("nav-item_signup");
            document.getElementById("login").classList.remove("nav-item_login");
    }

    render(){
        return(
            <header className="header">
                <div className="logo">
                    <button className="logo-btn" onClick={this.showSidebar}></button>
                </div>
                <nav className="nav">
                    <div id="home" className="nav-item" onClick={this.props.homeRedirect}>Home</div>
                    <div id="signup" className="nav-item" onClick={this.props.signupRedirect}>Signup</div>
                    <div id="login" className="nav-item" onClick={this.props.loginRedirect}>Login</div>
                    <div id="profile" className="nav-item nav-item_profile">Profile</div>
                    <div id="logout" className="nav-item nav-item_logout" onClick={this.logoutEventHandler}>Logout</div>
                </nav>
            </header>
        )
    }
}

export default Header;