import React from "react";
import List from "./components/List";
import AddList from "./components/AddList";

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            { name: "Все задачи", icon: "img/list.svg", active : true },
          ]}
        />
        <List
          items={[
            { name: "Покупки", color: "green" },
            { name: "Фронтенд", color: "blue" },
            { name: "Фильмы и сериа...", color: "pink" },
            { name: "Книги", color: "lime" },
            { name: "Личное", color: "grey" },
          ]}
        />
        <AddList />
      </div>
      <div className="todo__content"></div>
    </div>
  );
}

export default App;
