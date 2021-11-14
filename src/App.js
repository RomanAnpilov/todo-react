import React from "react";
import axios from "axios";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import List from "./components/List";
import AddList from "./components/AddList";

function App() {
  let navigate = useNavigate();
  let location = useLocation();

  const [lists, setLists] = React.useState([]);
  const [colors, setColors] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);

  // Get colors from server
  React.useEffect(() => {
    (async () => {
      try {
        const [colorsResponse, listsResponse] =
          await Promise.all([
            axios.get("http://127.0.0.1:5000/colors"),
            axios.get("http://127.0.0.1:5000/lists"),
          ]);
        setColors(colorsResponse.data);
        setLists(listsResponse.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  React.useEffect(() => {
    const listId = location.pathname.split("lists/")[1];
    if (lists) {
      const list = lists.find(item => item.id === Number(listId))
      setActiveItem(list)
    }
  }, [lists, location]);

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          color={colors}
          items={[
            {
              name: "Все задачи",
              icon: "img/list.svg",
              active: window.location.pathname === "/",
            },
          ]}
          onClickItem={() => navigate("/")}
        />
        <List
          items={lists}
          onClickItem={(list) => navigate(`/lists/${list.id}`)}
          activeItem={activeItem}
        />
        <AddList colors={colors} />
      </div>
      <div className="todo__content"></div>
    </div>
  );
}

export default App;
