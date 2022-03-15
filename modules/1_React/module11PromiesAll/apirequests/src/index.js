import React from "react";
import ReactDOM from "react-dom";
import { Reddit } from "./APICall";

const Application = () => {
  const subreddit = "aww";

  return (
    <div>
      <br />
      <Reddit subreddit={subreddit} />
      <br />
    </div>
  );
};

ReactDOM.render(<Application />, document.querySelector("#root"));
