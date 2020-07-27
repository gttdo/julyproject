import React, {Component} from "react";
import Counter from './counter';

class Home extends Component {
    render(){
        return(
            <div id="home" className="home">
                <Counter/>
            </div>
        )
    }
}

export default Home;