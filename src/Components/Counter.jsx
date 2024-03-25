import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this); // binding
    this.handleDefence = this.handleDefence.bind(this);
    this.state = { count: 0 };
  }

  handleAttack() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });

    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 10 });
  }
  x;
  handleDefence() {
    this.setState((previousState) => {
      return {
        count: previousState.count - 1,
      };
    });
  }

  render() {
    return (
      <div className="row text-white">
        <h1>Counter: {this.state.count} </h1>
        <button onClick={this.handleAttack} style={{ width: "200px" }}>
          +1
        </button>
        <button onClick={this.handleDefence} style={{ width: "200px" }}>
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
