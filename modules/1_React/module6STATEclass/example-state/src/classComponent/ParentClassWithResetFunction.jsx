import React from "react";
import { Child } from "../Child";
import { GrandChild } from "../GrandChild";

export class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesPressed: 0
    };

    this.handleAction = this.handleAction.bind(this);

    // MAKE SURE TO BIND YOUR FUNCTIONS!
    this.resetTimesPressed = this.resetTimesPressed.bind(this);
  }

  addOneToState() {
    console.log("inside add1 to state");
    return {
      timesPressed: this.state.timesPressed + 1
    };
  }

  resetStateToZero() {
    console.log("inside reset state to 0");
    return {
      timesPressed: 0
    };
  }

  handleAction(action) {
    console.log("Handling the action! ", action);

    this.setState(this.addOneToState);

    console.log("TIMES PRESSED? ", this.state.timesPressed);
  }

  resetTimesPressed(action) {
    this.setState(this.resetStateToZero);
  }

  render() {
    return (
      <>
        <Child onClick={this.handleAction} />
        <div>That dang button got clicked {this.state.timesPressed} times </div>

        <GrandChild onClick={this.resetTimesPressed} />
      </>
    );
  }
}
