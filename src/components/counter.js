import React, {Component} from 'react';

class Counter extends Component{
    state = {
        time: `
            ${new Date().getHours().toLocaleString()}:
            ${new Date().getMinutes().toLocaleString() < 10 ? `0${new Date().getMinutes().toLocaleString()}` : new Date().getMinutes().toLocaleString()}:
            ${new Date().getSeconds().toLocaleString() < 10 ? `0${new Date().getSeconds().toLocaleString()}` : new Date().getSeconds().toLocaleString()}`,
        milsecToday: Date.parse(new Date()),
        milsecTomorrow: Date.parse('28 Jul 2020 10:00:00 UTC') + (7 * 60 * 60 * 1000),
        countdownHours: "00",
        countdownMinutes: "00",
        countdownSeconds: "00",
        futureDate: "",
        futureTime: "",
        appointment: ""
    }
    tick= () => {
        this.setState(
            {time: new Date().getHours().toLocaleString() + ":" + new Date().getMinutes().toLocaleString() + ":" + new Date().getSeconds().toLocaleString()});
    }
    countdown = () => {
        let countdownMilsec = (this.state.milsecTomorrow - this.state.milsecToday);
        let hours = Math.floor(countdownMilsec / 1000 / 60 / 60);
        let minutes = Math.floor((countdownMilsec / 1000 / 60) % 60);
        let seconds = Math.floor((countdownMilsec / 1000) % 60);

        let hourStr = "0";
        let minStr = "0";
        let secStr = "0";

        hours < 10 ? hourStr = `0${hours}` : hourStr = `${hours}`;
        minutes < 10 ? minStr = `0${minutes}` : minStr = `${minutes}`;
        seconds < 10 ? secStr = `0${seconds}` : secStr = `${seconds}`;

        this.setState({
            milsecToday: Date.parse(new Date()),
            countdownSeconds: secStr,
            countdownMinutes: minStr,
            countdownHours: hourStr
        })
    }

    saveDate = (event) => {
        this.setState({
            futureDate: event.target.value
        })
    }

    saveTime = (event) => {
        this.setState({
            futureTime: event.target.value
        })
    }

    setDate = () => {
        let futureDate = this.state.futureDate;
        let futureTime = this.state.futureTime;
        let appointment = `${futureDate} ${futureTime}:00 UTC`;
        this.setState({
            milsecTomorrow: Date.parse(appointment) + (7 * 60 * 60 * 1000)
        })
    }

    componentDidMount(){
        this.intervalID = setInterval(() => {
            this.tick()
        }, 1000);
        
        this.intervalID = setInterval(() => {
            if(this.state.futureDate !== "" && this.state.futureTime !== ""){
                this.countdown()
            }
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }


    render(){
        return(
            <div className="counter">
                <h2 className="counter--clock heading-2">Current Time: {this.state.time}</h2>
                <p className="counter--instruction heading-3">Please select a date and time</p>
                <input className="counter--input" type="date" id="newDate" value={this.state.futureDate} onChange={this.saveDate}/>
                <input className="counter--input" type="time" onChange={this.saveTime} />
                <button className="counter--btn btn-1" type="submit" onClick={this.setDate}>Start</button>
                <p className="counter--countdown heading-2">Countdown: {this.state.countdownHours}:{this.state.countdownMinutes}:{this.state.countdownSeconds}</p>
            </div>
        )
    }
}

export default Counter;