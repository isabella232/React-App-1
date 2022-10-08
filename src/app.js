import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: {
                left: window.innerWidth / 2 - 124,
            },
            button: {
                left: window.innerWidth / 2 - 95,
            },
        }
    }
    render() {
        return <>
            <h3 className="Hello" style={this.state.hello}>Hello, world</h3>
            <h3 className="Button-header"  style={this.state.button}>
                <a href="https://github.com/MobileTV" className="Button-active">Github</a>
            </h3>
        </>;
    }
}
export default App; 
