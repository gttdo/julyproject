import React, {Component} from "react";
import Counter from './counter';

class Home extends Component {
    componentDidMount(){
        console.log("component did mount");
    }
    componentWillUnmount(){
        console.log("component did unmount");
    }
    render(){
        return(
            <div id="home" className="home">
                <Counter/>
            </div>
        )
    }
}

export default Home;