import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 }
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({ number: this.state.number + 1})
  }

  decreaseCounter() {
    this.setState({ number: this.state.number - 1})
  }


  render() {
    return (
    <div className='app'>
      <h1>Clicker Application</h1>
      <br/>
      <h2>{this.state.number}</h2>
      <br />
      <div className='button'>
        <button onClick={this.increaseCounter}>+</button>
        <button onClick={this.decreaseCounter}>-</button>
      </div>
    </div>
    
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;