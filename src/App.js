import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count+1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count-1}));
  };

  render() {
    console.log("render");
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>;
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    alert("메롱");
  }
}

export default App;

/*
mounting
updating
*/