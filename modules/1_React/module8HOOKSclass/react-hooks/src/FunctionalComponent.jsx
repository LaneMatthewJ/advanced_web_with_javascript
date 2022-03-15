import React from "react";

export const FunctionComponent = () => {
  const [clickedTimes, setClickedTimes] = React.useState(0);

  const handleClick = () => {
    setClickedTimes(clickedTimes + 1);
  };

  return (
    <>
      <button onClick={handleClick}> Press ME! </button>
      <div>That dang button got clicked {clickedTimes} times </div>
    </>
  );
};
