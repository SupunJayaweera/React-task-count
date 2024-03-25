import React from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this); // binding
    this.handleDefence = this.handleDefence.bind(this);
    this.state = { count: 0, gameStatus: "", lastPlay: "" };
  }

  handleAttack = () => {
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        gameStatus: newCount > 10 ? "You Won!" : previousState.gameStatus,
        lastPlay: "Attack",
      };
    });

    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 10 });
  };
  x;
  handleDefence = () => {
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10); // generating random number and round it

      return {
        count: newCount,
        gameStatus: newCount < -10 ? "You Lose!" : previousState.gameStatus,
        lastPlay: "Defence",
      };
    });
  };
  handleRandomPlay = () => {
    let playMode = Math.round(Math.random()); // generating random number and round it
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        gameStatus: "",
        lastPlay: "",
      };
    });
  };
  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score : {this.state.count} </h1>
        <p>You win at +10 points and You lose at -10 points!</p>
        <p>Last play : {this.state.lastPlay}</p>
        <h3>Game Status : {this.state.gameStatus}</h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          ></img>
        </div>
        <div className="col-6 col-md-3 ">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefence}
          ></img>
        </div>
        {/* <button onClick={this.handleAttack} style={{ width: "200px" }}>
          +1
        </button> */}
        {/* <button onClick={this.handleDefence} style={{ width: "200px" }}>
          -1
        </button> */}
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
