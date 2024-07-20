import React, { useState } from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";

const Task = ({
  label,
  onDone,
  done,
  cheked,
  onDelete,
  onEdition,
  edition,
  onChange,
  id,
}) => {
  let classNames = "";
  let classInp = "";
  let classSpan = "";

  if (done) {
    classNames += "completed";
  }
  if (edition) {
    classInp += "editing re";
    classSpan += "none";
  } else {
    classInp += "none";
    classSpan += "description";
  }

  const createDate = new Date();
  let time = formatDistanceToNow(createDate, { addSuffix: true });

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      onEdition();
    }
  };

  return (
    <ul className="todo-list">
      <li className={classNames}>
        <div className="taskFlex">
          <input
            className="toggle"
            type="checkbox"
            onClick={onDone}
            checked={cheked}
            onChange={() => {}}
          />
          <label>
            <span className={classSpan} onClick={onDone}>
              {label}
            </span>

            <div>
              <input
                className={classInp}
                type="text"
                defaultValue={label}
                onChange={(e) => onChange(e.target.value, id)}
                onKeyUp={onSubmit}
              />
            </div>

            <span className="created">created {time}</span>
          </label>
          <button className="icon icon-edit" onClick={onEdition}></button>
          <button className="icon icon-destroy" onClick={onDelete}></button>
        </div>
      </li>
    </ul>
  );
};

export default Task;

Task.defaultProps = {
  label: "",
  onDone: () => {},
  onEdition: () => {},
  done: 1,
  edition: "",
  onDelete: () => {},
  id: 0,
  onChange: () => {},
  cheked: 1,
};

Task.propTypes = {
  label: (props, propName) => {
    let value = props[propName];

    if (typeof value === "sting") return null;
  },
  onDone: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  onEdition: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  done: (props, propName) => {
    let value = props[propName];

    if (typeof value === "number" && !isNaN(value)) return null;
  },
  edition: (props, propName) => {
    let value = props[propName];

    if (typeof value === "sting") return null;
  },
  onDelete: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  id: (props, propName) => {
    let value = props[propName];

    if (typeof value === "number" && !isNaN(value)) return null;
  },
  onChange: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  cheked: (props, propName) => {
    let value = props[propName];

    if (typeof value === "number" && !isNaN(value)) return null;
  },
};
