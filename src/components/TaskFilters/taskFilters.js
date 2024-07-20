import React from "react";
import "./taskFilters.css";

const TaskFilters = ({ setFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={() => setFilter("all")}>
          All
        </button>
      </li>
      <li>
        <button onClick={() => setFilter("active")}> Active</button>
      </li>
      <li>
        <button onClick={() => setFilter("complete")}> Completed</button>
      </li>
    </ul>
  );
};

export default TaskFilters;
TaskFilters.defaultProps = {
  onShowFilter: () => {},
};

TaskFilters.ropTypes = {
  onShowFilter: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
};
