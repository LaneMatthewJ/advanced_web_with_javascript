import React from "react";

export const GrandChild = props => {
  return (
    <div>
      I am the grandest of children.
      <button onClick={props.onClick}> PUSH THIS BUTTON FOR FUN </button>
    </div>
  );
};
