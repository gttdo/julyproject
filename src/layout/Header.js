import React, {Component} from 'react';

class Header extends Component {
    showSidebar = () => {
        document.getElementById("sidebar").classList.toggle('active');
    }

    render(){
        return(
            <header className="header">
                <div className="logo">
                    <button className="logo-btn" onClick={this.showSidebar}></button>
                </div>
                <nav className="nav">
                    <div className="nav-item">Home</div>
                    <div className="nav-item" onClick={this.props.signupRedirect}>Signup</div>
                    <div className="nav-item" onClick={this.props.loginRedirect}>Login</div>
                </nav>
            </header>
        )
    }
}

export default Header;