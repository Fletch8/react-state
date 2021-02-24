import React, { Component } from 'react'; // class-based components

class Person extends Component {
    state = {
        city: 'Los Angeles',
        phone: '888-888-8888',
        name: 'Fletch',
        college: 'UCLA'
    }

    changeCity = () => {
        this.setState({
            city: "Atlanta"
        })
    }


    render() {        
        return (
        <div>
            <p>{this.state.name}</p>
            <p>{this.state.city}</p>
            <p>{this.state.college}</p>
            <button onClick={this.changeCity}>Move cities!!</button>

        </div>
        )
    }
}

export default Person;