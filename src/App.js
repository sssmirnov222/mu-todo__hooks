import React, { useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask/newTask";
import Footer from "./components/Footer/footer";
import TaskList from "./components/TaskList/taskList";

const App = () => {
  let [listItem, setListItem] = useState([]);
  let [filter, setFilter] = useState("all");

  const onDone = (id) => {
    let idx = listItem.findIndex((el) => el.id === id);
    let oldId = listItem[idx];
    let newId = { ...oldId, done: !oldId.done, cheked: !oldId.cheked };
    setListItem([...listItem.slice(0, idx), newId, ...listItem.slice(idx + 1)]);
  };

  const onDelete = (id) => {
    let idx = listItem.findIndex((el) => el.id === id);
    setListItem([...listItem.slice(0, idx), ...listItem.slice(idx + 1)]);
  };

  const onEdition = (id) => {
    let idx = listItem.findIndex((el) => el.id === id);
    let oldId = listItem[idx];
    let newId = { ...oldId, edition: !oldId.edition };
    setListItem([...listItem.slice(0, idx), newId, ...listItem.slice(idx + 1)]);
  };

  const createList = (label) => {
    return {
      label,
      id: Date.now(),
      edition: false,
      done: false,
      cheked: false,
    };
  };

  const addList = (text) => {
    let newList = createList(text);
    setListItem([...listItem, newList]);
  };

  const clearComplete = () => {
    setListItem([]);
  };

  const onChange = (e, id) => {
    let idx = listItem.findIndex((el) => el.id === id);
    let item = listItem[idx];

    item.label = e;
    setListItem([...listItem]);
  };

  let doneCount = listItem.filter((el) => el.done).length;
  let count = listItem.length - doneCount;

  let listItemFilter = [];
  if (filter === "all") {
    listItemFilter = listItem;
  } else if (filter === "active") {
    listItemFilter = listItem.filter((el) => el.done === false);
  } else if (filter === "complete") {
    listItemFilter = listItem.filter((el) => el.done === true);
  }

  return (
    <>
      <NewTask addList={addList} />
      <TaskList
        listItem={listItemFilter}
        addList={addList}
        onDone={onDone}
        onDelete={onDelete}
        onEdition={onEdition}
        onChange={onChange}
      />
      <Footer
        clearComplete={clearComplete}
        count={count}
        setFilter={setFilter}
      />
    </>
  );
};

export default App;
