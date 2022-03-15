import React from "react";

import "../index.css";

export const Avatar = () => {
  return (
    <img
      className="avatar"
      src="https://img.favpng.com/4/6/8/corn-on-the-cob-maize-sweet-corn-cartoon-png-favpng-QaEd3CLgQhWnVzmV5LRKsn11b.jpg"
      alt="avatar"
    />
  );
};

export const Message = () => {
  return <div className="message">TWEET CORN</div>;
};

export const Author = () => {
  return (
    <span className="author">
      <span className="name">Matt</span>
      <span className="handle">@COOLGUY5000</span>
    </span>
  );
};

export const Time = () => {
  return <span className="time">somehours ago</span>;
};

export const ReplyButton = () => {
  return <i className="fa fa-reply reply-button" />;
};

export const RetweetButton = () => {
  return <i className="fa fa-retweet retweet-button" />;
};

export const LikeButton = () => {
  return <i className='fa fa-heart like-button"' />;
};

export const MoreOptions = () => {
  return <i className="fa fa-ellipsis-h more-options-button" />;
};
