import React, { useState, useReducer } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: ""
        }
    }
    
     apiCall = (e) => {
         e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/todos/1')
    }
    render() {
        return (
            <form>
                <button disabled={true} onClick={(e)=>this.apiCall(e)}>click</button>
                <button disabled={false} onClick={(e)=>this.apiCall(e)}>click 1</button>

            </form>
        )
    }
}

export default App;