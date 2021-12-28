import React, {Component}from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue
        };
    }

    changeValue = () => {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue + 1
            })
        })
        // console.log(`Change value Clicked!`)
    }

    render() {
        return (
            <div className="counter">
            Counter:
            <Display displayValue={this.state.counterValue} />
            <ButtonsPanel buttonMethod={this.changeValue} />
        </div>
        
        )
    }
}




// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() *(108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     )
// }

export default Counter;