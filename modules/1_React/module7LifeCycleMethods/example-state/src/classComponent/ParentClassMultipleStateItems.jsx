import React from "react";
import { Child } from "../Child";
import { GrandChild } from "../GrandChild";

// Even though we have multiple items in the state, when we set it, we only need to pass the key that we're overwriting in set state!

export class ParentComponent extends React.Component {
  constructor(props) {
    console.log("This instatiates the component and brings in props", props);
    super(props);
    this.state = {
      timesPressed: 0,
      value: ""
    };

    this.handleAction = this.handleAction.bind(this);
    this.resetTimesPressed = this.resetTimesPressed.bind(this);
    this.handleTypeAction = this.handleTypeAction.bind(this);
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

  updateTheValue(event) {
    return {
      value: event.target.value
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

  handleTypeAction(event) {
    this.setState(this.updateTheValue(event));
  }

  render() {
    return (
      <>
        <Child onClick={this.handleAction} />
        <div>That dang button got clicked {this.state.timesPressed} times </div>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleTypeAction}
          />
        </div>
        <GrandChild onClick={this.resetTimesPressed} />
      </>
    );
  }
}
