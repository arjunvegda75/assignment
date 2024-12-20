import React, { useState } from "react";

const Listview = () => {
  let array = [
    "Use Array .map",
    "Not a for Loop",
    "Give each item a unique key",
    "Avoid using arry index as the key",
  ];

  return (
    <div className="list">
      <h1>The "React Way"to Render List</h1>
      <div className="liststyle">
      <ul>
        {array.map((i) => {
          return <li>{i}</li>;
        })}
      </ul>
      </div>
     
    </div>
  );
};

export default Listview;
