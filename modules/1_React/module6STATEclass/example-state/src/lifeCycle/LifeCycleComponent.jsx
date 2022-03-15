import React from "react";

const networkData = [
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA",
  "DATA"
];

export class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timesPressed: 0,
      networkCallBoolean: false
    };

    this.handleAction = this.handleAction.bind(this);
    this.makeUnmount = this.makeUnmount.bind(this);
  }

  handleAction(action) {
    console.log("Handling the action! ", action);

    this.setState({
      timesPressed: this.state.timesPressed + 1
    });
  }

  makeUnmount() {
    this.setState({
      networkCallBoolean: false
    });
  }

  componentDidMount() {
    console.log("I HAVE MOUNTED");

    this.setState({
      networkCallBoolean: true
    });
  }

  render() {
    return (
      <>
        <div>I Have a life cycle</div>
        <button onClick={this.handleAction}>CLICK ME I AM A BUTTON</button>

        {this.state.timesPressed}

        <br />
        <br />
        <button onClick={this.makeUnmount}>MURDER THE LIST: </button>
        <br />

        {this.state.networkCallBoolean &&
          networkData.map((thing, index) => (
            <div key={index}> thing is : {thing + index}</div>
          ))}
      </>
    );
  }
}
