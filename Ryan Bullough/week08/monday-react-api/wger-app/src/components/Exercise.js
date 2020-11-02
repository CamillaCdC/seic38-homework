import React from "react";

const Exercise = (props) => {
  return (
    <div>
      <div className="name">{props.name}</div>
      <div className="description">
        {props.description.replace("<p>/g", "")}
      </div>
    </div>
  );
};

export default Exercise;
