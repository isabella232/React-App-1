import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
class App extends React.Component {
    render() {
        return <>
            <div className="header">
                <Select/>
            </div>
        </>
    }
}
function Select() {
    const butt = [
        {
            href: "/",
            name: "Главная"
        },
        {
            href: "",
            name: "ads"
        }
    ]
    const styles = {
        width: (5 * butt.length) + (58 * butt.length)
    }
    const items = butt.map((nutt) => <li><a href={nutt.href} className="button">{nutt.name}</a></li>);
    return (
        <ul className="select" style={styles}>{items}</ul>
    );
}
export default App;