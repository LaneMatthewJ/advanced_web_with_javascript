import React from "react";
import { Child } from "../Child";
import { GrandChild } from "../GrandChild";

export class ParentComponent extends React.Component {
  // get rid of that constructor
  state = {
    timesPressed: 0,
    value: "",
    user: {
      username: "",
      password: ""
    }
  };

  // change all functions to arrow functions!
  addOneToState = () => ({
    timesPressed: this.state.timesPressed + 1
  });

  resetStateToZero = () => ({
    timesPressed: 0
  });

  updateUsername = event => ({
    user: {
      username: event.target.value,
      password: this.state.user.password
    }
  });

  updatePassword = event => {
    return {
      user: {
        password: event.target.value,
        username: this.state.user.username
      }
    };
  };

  handleAction = action => {
    this.setState(this.addOneToState);
  };

  resetTimesPressed = action => {
    this.setState(this.resetStateToZero);
  };

  handleUsernameAction = event => {
    this.setState(this.updateUsername(event));
    console.log("State after setting username", this.state);
  };

  handlePasswordAction = event => {
    this.setState(this.updatePassword(event));
    console.log("State after setting password", this.state);
  };

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
