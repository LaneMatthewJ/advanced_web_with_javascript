import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Reddit } from "./APICall";
import { RedditHookComponent } from "./APICallHooks";
import { makeAxiosCall } from "./networkCallExamples/axiosCall";
import { makeSuperAgentCall } from "./networkCallExamples/superagentCall";
import { makeFetchCall } from "./networkCallExamples/fetchCall";

const InClassReddit = ({ subreddit }) => {
  return (
    <div>
      <div>
        PUT INPUT BOX HERE and change subreddit based on input box (on your own
        <span role="img">😀</span> )
      </div>
      <RedditHookComponent subreddit={subreddit} />
    </div>
  );
};

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
  const subreddit = "aww";
  const [toggleView, setToggleView] = useState(false);

  const handleToggleView = () => {
    setToggleView(!toggleView);
  };

  return (
    <div>
      <h1>DOING STUFF!</h1>
      <button onClick={handleToggleView}> Toggle Views! </button>
      <br />
      Notice after you click the toggle view, you make that network call again?
      <br />
      {toggleView ? (
        <DifferentNetworkCallsPostingToConsole />
      ) : (
        <InClassReddit subreddit={subreddit} />
      )}
      <br />
    </div>
  );
};

ReactDOM.render(<Application />, document.querySelector("#root"));
