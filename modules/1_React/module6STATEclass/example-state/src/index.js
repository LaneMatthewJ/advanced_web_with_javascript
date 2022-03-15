import React from "react";
import ReactDOM from "react-dom";
import { ParentComponent } from "./Parent";
// import { ParentComponent } from "./classComponent/ParentClassComponent";
// import { ParentComponent } from "./classComponent/ParentClassWithStateFunction";
// import { ParentComponent } from "./classComponent/ParentClassWithResetFunction";
// import { ParentComponent } from "./classComponent/ParentClassMultipleStateItems";
// import { ParentComponent } from "./classComponent/ParentComponentShallowDeepState";
// import { ParentComponent } from "./classComponent/ParentClassClean";
// To see what's happening in each, just uncomment each one!
import { LifeCycleComponent } from "./lifeCycle/LifeCycleComponent";
// import { Whatever } from "./Whatever";

const ParentChildParty = () => {
  return (
    <>
      <h1>Parent 1</h1>
      <ParentComponent />
      <br />
      <h1>Parent 2</h1>
      <ParentComponent />
      <br />
      <h1>Parent 3</h1>
      <ParentComponent />
      <br />
      <div>
        Clearly, every single instance of "ParentClassComponent" has its own
        state. Try opening the devtools and looking around
      </div>
    </>
  );
};

ReactDOM.render(<LifeCycleComponent />, document.querySelector("#root"));
