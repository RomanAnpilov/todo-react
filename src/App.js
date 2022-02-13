import React from "react";
import axios from "axios";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import {useSelector} from "react-redux";
import {fetchColors} from "./Redux/actions/colors";

import List from "./components/List";
import AddList from "./components/AddList";
import Tasks from "./components/Tasks";

import AppContext from "./context"

function App() {
  let navigate = useNavigate();
  let location = useLocation();

  React.useEffect(() => {
    fetchColors();
  }, [])

  const items = useSelector((state) => (state.items));
  console.log(items)

  const [lists, setLists] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [colors, setColors] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);

  // Get colors from server
  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const [colorsResponse, listsResponse, tasksResponse] =
  //         await Promise.all([
  //           axios.get("https://61995d4b9022ea0017a7ae3f.mockapi.io/colors"),
  //           axios.get("https://61995d4b9022ea0017a7ae3f.mockapi.io/lists"),
  //           axios.get("https://61995d4b9022ea0017a7ae3f.mockapi.io/tasks")
  //         ]);
  //       setColors(colorsResponse.data);
  //       setLists(listsResponse.data);
  //       setTasks(tasksResponse.data);
        
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, []);

 

  React.useEffect(() => {
    const listId = location.pathname.split("lists/")[1];
    if (lists) {
      const list = lists.find(item => item.id === Number(listId))
      // const list = {
      //   "id": 1,
      //   "name": "Продажи",
      //   "color": {"name" : "lime", "hex" : "#B6E6BD"}
      // }
      setActiveItem(list)
    }
  }, [lists, location]);

  return (
    <AppContext.Provider value={{
      lists, tasks, colors
    }}>
    <div className="todo">
      {/* <div className="todo__sidebar">
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
      
        <div className="todo__tasks">
          <Routes>
            <Route exact path="/" element={<>{lists.map(list => (<Tasks list={list} tasks={tasks}/>))}</>}/>
            {console.log(activeItem)}
            <Route exact path="/lists/:id" element={<Tasks list={activeItem} tasks={tasks} />} />
          </Routes>
        </div> */}
    </div>
    </AppContext.Provider>
  );
}

export default App;
