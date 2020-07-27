import React, {Component} from 'react';

class Sidebar extends Component{
    render(){
        return(
            <div id="sidebar" className="sidebar">
                <nav className="sidebar--nav">
                    <span className="sidebar--item">Profile</span>
                    <span className="sidebar--item">Dashboard</span>
                    <span className="sidebar--item">Items</span>
                    <span className="sidebar--item">Settings</span>
                </nav>
            </div>
        )
    }
}

export default Sidebar;