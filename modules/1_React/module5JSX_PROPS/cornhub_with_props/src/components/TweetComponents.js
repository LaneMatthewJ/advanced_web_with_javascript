import React from "react";
import get from "lodash/get";
import moment from "moment";
import "../index.css";

export const Avatar = props => {
  return <img className="avatar" src={props.avatar} alt="avatar" />;
};

export const Message = props => {
  return <div className="message">{props.message}</div>;
};

export const Author = props => {
  return (
    <span className="author">
      <span className="name">{get(props, "author.name")}</span>
      <span className="handle">@{get(props, "author.handle")}}</span>
    </span>
  );
};

export const Time = props => {
  return <span className="time">{moment(props.timestamp).fromNow()}</span>;
};

export const ReplyButton = () => {
  return <i className="fa fa-reply reply-button" />;
};

export const RetweetButton = props => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      {props.retweets > 0 && (
        <span className="like-count"> {props.retweets} </span>
      )}
    </span>
  );
};

export const LikeButton = props => {
  return (
    <span className="like-button">
      <i className='fa fa-heart like-button"' />
      {props.likes > 0 && <span className="like-count"> {props.likes} </span>}
    </span>
  );
};

export const MoreOptions = () => {
  return <i className="fa fa-ellipsis-h more-options-button" />;
};
