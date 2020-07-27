import React, {Component} from "react";
import Clock from './clock';

class Home extends Component {
    render(){
        return(
            <div id="home" className="home">
                <Clock/>
            </div>
        )
    }
}

export default Home;