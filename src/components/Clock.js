import React from "react";
export class Clock extends React.Component {
  state = {
    date: new Date()
  };

  tick = () => {
    this.setState({
      date: new Date()
    });
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <p>{this.state.date.toLocaleTimeString()}</p>;
  }
}
