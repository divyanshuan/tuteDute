import React from "react";
import "./routespath.css";

const Routespath = (props) => {
  return (
    <div className="main_path">
      <div className="path">
        {props.paths.map((ele, k) => {
          return <p key={k}> {ele}</p>;
        })}
      </div>
    </div>
  );
};

export default Routespath;
