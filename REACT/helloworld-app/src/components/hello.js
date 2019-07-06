import React from "react";

const Hello = () => {
  /* // JSX method
  return (
    <div className="dummyClass">
      <h1>Hello chiri</h1>
    </div>
  );
*/

  // without JSX

  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Chiran!!")
  );
};

export default Hello;
