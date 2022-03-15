import React from "react";
import { Child } from "../Child";

// do this for the reset

export class ParentComponent extends React.Component {
  constructor(props) {
    console.log("This instatiates the component and brings in props", props);
    super(props);
    this.state = {
      timesPressed: 0
    };

    this.handleAction = this.handleAction.bind(this);
  }

  addOneToState() {
    return {
      timesPressed: this.state.timesPressed + 1
    };
  }

  handleAction(action) {
    this.setState(this.addOneToState);
  }

  render() {
    return (
      <>
        <Child onClick={this.handleAction} />
        <div>That dang button got clicked {this.state.timesPressed} times </div>
      </>
    );
  }
}
