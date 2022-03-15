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
      value: "",
      user: {
        username: "",
        password: ""
      }
    };

    this.handleAction = this.handleAction.bind(this);
    this.resetTimesPressed = this.resetTimesPressed.bind(this);
    this.handleUsernameAction = this.handleUsernameAction.bind(this);
    this.handlePasswordAction = this.handlePasswordAction.bind(this);
  }

  addOneToState() {
    return {
      timesPressed: this.state.timesPressed + 1
    };
  }

  resetStateToZero() {
    return {
      timesPressed: 0
    };
  }

  updateUsername(event) {
    return {
      user: {
        username: event.target.value
      }
    };
  }

  updatePassword(event) {
    return {
      user: {
        password: event.target.value
      }
    };
  }

  handleAction(action) {
    this.setState(this.addOneToState);
  }

  resetTimesPressed(action) {
    this.setState(this.resetStateToZero);
  }

  handleUsernameAction(event) {
    this.setState(this.updateUsername(event));
    console.log("State after setting username", this.state);
  }

  handlePasswordAction(event) {
    this.setState(this.updatePassword(event));
    console.log("State after setting password", this.state);
  }

  render() {
    return (
      <>
        <Child onClick={this.handleAction} />
        <div>That dang button got clicked {this.state.timesPressed} times </div>
        <div>
          Username:
          <input
            type="text"
            value={this.state.user.username}
            onChange={this.handleUsernameAction}
          />
          <div> Username typed: {this.state.user.username} </div>
        </div>
        <br />
        <br />
        <div>Password:</div>
        <input
          type="password"
          value={this.state.user.password}
          onChange={this.handlePasswordAction}
        />
        <div> Password typed: {this.state.user.password} </div>

        <br />
        <GrandChild onClick={this.resetTimesPressed} />
      </>
    );
  }
}
