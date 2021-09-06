import React from "react";
import ProTypes from "prop-types";

const Paper = ({ chilldren }) => {
  return (
    <div className="container">
      <div className="frame">{chilldren}</div>
    </div>
  );
};

Paper.proTypes = {
  chilldren: ProTypes.oneOfType([
    ProTypes.arrayOf(ProTypes.node),
    ProTypes.node
  ])
};

export default Paper;
