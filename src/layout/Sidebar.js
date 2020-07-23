import React, {Component} from 'react';

class Sidebar extends Component{
    render(){
        return(
            <div id="sidebar" className="sidebar">
                <nav className="sidebar--nav">
                    <a href="#" className="sidebar--item">Profile</a>
                    <a href="#" className="sidebar--item">Dashboard</a>
                    <a href="#" className="sidebar--item">Items</a>
                    <a href="#" className="sidebar--item">Settings</a>
                </nav>
            </div>
        )
    }
}

export default Sidebar;