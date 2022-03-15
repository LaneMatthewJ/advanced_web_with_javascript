import React from "react";
import ReactDOM from "react-dom";
import { makeAxiosCall } from "./networkCallExamples/axiosCall";
import { makeSuperAgentCall } from "./networkCallExamples/superagentCall";
import { makeFetchCall } from "./networkCallExamples/fetchCall";


const DifferentNetworkCallsPostingToConsole = () => {
  return (
    <div>
      <h2>These buttons call the functional methods of the network calls!</h2>
      <div>
        <button onClick={makeAxiosCall}>Click me for Axios</button>
      </div>
      <div>
        <button onClick={makeSuperAgentCall}>Click me for Super Agent</button>
      </div>
      <div>
        <button onClick={makeFetchCall}>Click me for fetch </button>
      </div>
    </div>
  );
};

const Application = () => {

  return (
    <div>
      <h1>Make some calls!</h1>
      <br />
      <br />
      <DifferentNetworkCallsPostingToConsole />
      <br />
    </div>
  );
};

ReactDOM.render(<Application />, document.querySelector("#root"));
