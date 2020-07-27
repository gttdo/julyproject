import React, {Component} from 'react';

class Clock extends Component{
    state = {
        time: new Date().getHours().toLocaleString() + ":" + new Date().getMinutes().toLocaleString() + ":" + new Date().getSeconds().toLocaleString(),
        milsecToday: Date.parse(new Date()),
        milsecTomorrow: Date.parse('24 Jul 2020 03:30:00 UTC'),
        countdown: 0
    }
    tick() {
        this.setState(
            {time: new Date().getHours().toLocaleString() + ":" + new Date().getMinutes().toLocaleString() + ":" + new Date().getSeconds().toLocaleString()});
    }
    countdown(){
        let countdown = Math.floor((this.state.milsecTomorrow - this.state.milsecToday) / 1000 / 60 / 60);
        this.setState({
            milsecToday: Date.parse(new Date()),
            countdown: countdown
        })
    }
    componentDidMount(){
        this.intervalID = setInterval(() => {
            this.tick()
        }, 1000);
        this.intervalID = setInterval(() => {
            this.countdown()
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }


    render(){
        return(
            <div>
                <h2>{this.state.time}</h2>
                <h3>{this.state.milsecToday}</h3>
                <h3>{this.state.milsecTomorrow}</h3>
                <p>Countdown: {this.state.countdown}</p>
            </div>
        )
    }
}

export default Clock;