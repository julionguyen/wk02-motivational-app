import {Component} from "react";

export default class PushupCounter extends Component {
    
        state = {
            countPushUp: 0,
            countChinUp: 0
        }        

        doPushUp=()=> {        
            console.log("increase push up count!")
            this.setState({countPushUp: this.state.countPushUp + 1})            
        }

        doChinUp=()=> {        
            console.log("increase chin up count!")
            this.setState({countChinUp: this.state.countChinUp + 1})
        }

        doResetCount=() => {
            this.setState({
                countPushUp: 0
            })
            this.setState({
                countChinUp: 0
            })
        }
    render() {            
        let message = ""
        if (this.state.countPushUp < 5) {
            message='You can do it!'            
        } else if (this.state.countPushUp < 8) {
            message='You are doing well'
        } else if (this.state.countPushUp < 10) {
            message='Almost there'
        } else {
            message=<strong>YOU DID IT</strong>
        }
        return (
            <div className="PushupCounter">
                <p>{this.state.countPushUp} pushups!</p>
                <p>{this.state.countChinUp} chinups!</p>
                <p>{message}</p>
                <button onClick={this.doPushUp}>Push Up</button>
                <button onClick={this.doChinUp}>Chin Up</button>
                <button onClick={this.doResetCount}>Reset</button>
            </div>
        )        
    }
}