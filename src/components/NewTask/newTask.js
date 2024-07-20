import React, { useState } from "react";
import "./newTask.css";

const NewTask = ({ addList }) => {
  let [newList, setNewList] = useState("");

  const onChange = (e) => {
    setNewList(e.target.value);
  };

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      addList(newList);
      setNewList("");
    }
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={onChange}
        value={newList}
        onKeyUp={onSubmit}
      />
    </div>
  );
};

export default NewTask;

NewTask.defaultProps = {
  onSubmit: () => {},
  label: "",
  onChange: () => {},
};

NewTask.propTypes = {
  onSubmit: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
  label: (props, propName) => {
    let value = props[propName];

    if (typeof value === "string") return null;
  },
  onChange: (props, propName) => {
    let value = props[propName];

    if (typeof value === "object") return null;
  },
};
