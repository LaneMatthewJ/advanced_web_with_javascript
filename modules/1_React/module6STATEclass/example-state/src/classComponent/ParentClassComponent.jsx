import React from "react";
import { Child } from "../Child";

export class ParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timesPressed: 0
    };

    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(action) {
    console.log("Handling the action! ", action);

    this.setState({
      timesPressed: this.state.timesPressed + 1
    });

    console.log("TIMES PRESSED? ", this.state.timesPressed);
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
