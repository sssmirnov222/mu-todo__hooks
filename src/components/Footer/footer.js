import React from "react";
import "./footer.css";
import TaskFilters from "../TaskFilters/taskFilters";

const Footer = ({ clearComplete, count, setFilter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} count left</span>
      <TaskFilters setFilter={setFilter} />
      <button className="clear-completed" onClick={clearComplete}>
        Clear completed
      </button>
    </footer>
  );
};
export default Footer;

Footer.defaultProps = {
  clearComplete: () => {},
  doneCount: 1,
  onShowFilter: () => {},
};

Footer.propTypes = {
  clearComplete: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  doneCount: (props, propName) => {
    let value = props[propName];

    if (typeof value === "number" && !isNaN(value)) return null;
  },
  onShowFilter: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
};
