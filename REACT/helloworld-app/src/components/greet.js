import React from "react";

// function Greet() {
//   return <h1>Hello Chiranjeev</h1>;
// }

/*export const Greet = () => <h1>!!Hello Chiranjeev!!</h1>; //if we use export than in app.js we have to specially mentio import {Greet}
 */
const Greet = props => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} discription => {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet; // default so any name can be import in app.js
