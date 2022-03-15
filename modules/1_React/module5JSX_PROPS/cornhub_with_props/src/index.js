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
  MoreOptions,
  Time
} from "./components/TweetComponents";
import { tweetData } from "./fakeData/tweets";

const Tweet = props => {
  console.log(`Prop? : `, props);
  return (
    <div className="tweet">
      <Avatar avatar={props.tweetInfo.avatar} />
      <div className="content">
        <Author author={props.tweetInfo.author} />
        <Time timestamp={props.tweetInfo.timestamp} />
        <Message message={props.tweetInfo.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton retweets={props.tweetInfo.retweets} />
          <LikeButton likes={props.tweetInfo.likes} />
          <MoreOptions />
        </div>
      </div>
    </div>
  );
};

const TweetList = () => {
  const elementList = tweetData.map((element, index) => {
    return <Tweet tweetInfo={element} key={index} />;
  });

  return elementList;
};

ReactDOM.render(<TweetList />, document.querySelector("#root"));
