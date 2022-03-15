import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Avatar,
  Author,
  Message,
  ReplyButton,
  RetweetButton,
  LikeButton,
  MoreOptions
} from "./components/TweetComponents";

const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptions />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Tweet />, document.querySelector("#root"));
