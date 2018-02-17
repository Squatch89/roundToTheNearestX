import React, {Component} from 'react';


class RoundToX extends Component {
    constructor() {
        super();
        this.state = {
            multiple: 50,
            number: 0,
            answer: ''
        }
    }
    
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({number: event.target.value});
    };
    
    handleChangeMultiple = (event) => {
        console.log(event.target.value);
        this.setState({multiple: event.target.value});
    };
    
    roundToX = (num, x) => {
        if (num < x) {
            console.log(x);
            this.setState({answer: x});
        }
        else {
            this.setState({answer: (Math.round(num / x) * x)});
            console.log(Math.round(num / x) * x);
        }
    };
    
    // componentDidUpdate() {
    //     console.log(this.state.number);
    // }

// roundToX(224, 50);
    
    render() {
        return (
            <div>
                <form>
                    <label>
                        <h2>Choose The Multiple</h2>
                    </label>
                    <select value={this.state.multiple} onChange={this.handleChangeMultiple}>
                        <option value="50">50</option>
                        <option value="22">22</option>
                    </select>
                    
                    
                    <label>
                        <h2>Input a number</h2>
                        <input type="number" value={this.state.number} onChange={this.handleChange}/>
                    </label>
                </form>
                
                <button onClick={() => {this.roundToX(this.state.number, this.state.multiple)}}>Find Multiple</button>
                
                <h2>Results:</h2>
                <h3>{this.state.answer}</h3>
            </div>
        )
    }
    
}

export default RoundToX;