import React from "react";
import "./taskList.css";
import Task from "../Task/task";

const TaskList = ({ listItem, onDone, onDelete, onEdition, onChange }) => {
  let element = listItem.map((list) => {
    return (
      <li key={list.id}>
        <Task
          {...list}
          onDone={() => onDone(list.id)}
          onDelete={() => onDelete(list.id)}
          onEdition={() => onEdition(list.id)}
          onChange={onChange}
        />
      </li>
    );
  });

  return <ul>{element}</ul>;
};

export default TaskList;
TaskList.defaultProps = {
  listItem: [],
  onDone: () => {},
  onEdition: () => {},
  onDelete: () => {},
  onLabelDelete: () => {},
  onChange: () => {},
  onСheked: () => {},
};

TaskList.propTypes = {
  listItem: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  onDone: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  onEdition: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  onDelete: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  onLabelDelete: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  onChange: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  onСheked: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
};
