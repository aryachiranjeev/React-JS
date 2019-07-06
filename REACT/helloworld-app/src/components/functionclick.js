import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("clicked the function button ");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click function button</button>
    </div>
  );
}

export default FunctionClick;
