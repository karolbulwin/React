import React from "react";
import { Button } from "./Button";
import { Display } from "./Display";
import { Clock } from "./Clock";
import { Hello } from "./Hello";
export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.name = "React button counter";
    this.state = {
      count: 5
    };
    this.increment = this.increment.bind(this);
  }
  increment(incrementValue) {
    this.setState({
      count: this.state.count + incrementValue
    });
  }
  render() {
    return (
      <div className="Counter">
        <Hello name={this.name} />
        <Button increment={this.increment} incrementValue={1} />
        <Button increment={this.increment} incrementValue={5} />
        <Button increment={this.increment} incrementValue={10} />
        <Button increment={this.increment} incrementValue={100} />
        <Display count={this.state.count} />
        <Clock />
      </div>
    );
  }
}
