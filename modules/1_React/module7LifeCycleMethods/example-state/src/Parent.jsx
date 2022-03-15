import React from "react";
import { Child } from "./Child";

const handleAction = someEvent => {
  console.log("Some event : ", someEvent);
};

export const ParentComponent = () => {
  return (
    <p>
      Some Child, when clicked, will console log:
      <Child onClick={handleAction} />;
    </p>
  );
};
