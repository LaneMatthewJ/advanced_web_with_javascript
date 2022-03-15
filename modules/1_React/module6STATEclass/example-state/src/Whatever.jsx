import React from "react";

export const Whatever = props => {
  const [pageone, setTogglePageOne] = React.useState(true);
  const [pagetwo, setTogglePageTwo] = React.useState(false);

  const togglePageOne = () => {
    console.log("toggle page was ", pageone);

    setTogglePageOne(true);
    setTogglePageTwo(false);
  };

  const togglePageTwo = () => {
    setTogglePageOne(false);
    setTogglePageTwo(true);
  };

  return (
    <>
      <span>
        <button onClick={togglePageOne}> Click ME 1 </button>
        <button onClick={togglePageTwo}> Click ME 2 </button>
      </span>
      {pageone && <div>PRETEND I AM A WHOLE PAGE</div>}
      {pagetwo && <div> I AM PAGE TWO</div>}
    </>
  );
};
