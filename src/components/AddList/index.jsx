import React from "react";
import Badge from "../Badge"
import List from "../List";
import styles from "./AddList.module.scss";

const AddList = () => {
    const [visiblePopUp, setVisiblePopUp] = React.useState();
  
    const colors = [
    {
      "id": 1,
      "hex": "#C9D1D3",
      "name": "grey"
    },
    {
      "id": 2,
      "hex": "#42B883",
      "name": "green"
    },
    {
      "id": 3,
      "hex": "#64C4ED",
      "name": "blue"
    },
    {
      "id": 4,
      "hex": "#FFBBCC",
      "name": "pink"
    },
    {
      "id": 5,
      "hex": "#B6E6BD",
      "name": "lime"
    },
    {
      "id": 6,
      "hex": "#C355F5",
      "name": "purple"
    },
    {
      "id": 7,
      "hex": "#110133",
      "name": "black"
    },
    {
      "id": 8,
      "hex": "#FF6464",
      "name": "red"
    }
  ]
  
    return (
    <div className={styles.AddList}>
      <List items={[{ name: "Добавить папку", icon: "img/plus.svg" }]} />
      <div className={styles.pop_up}>
        <img src="img/close.svg" alt="close" className={styles.closeBtn}/>
        <input type="text" placeholder="Название папки" className="field" />
        <div className={styles.colors}>{colors.map((item, index) => <Badge key={index} color={item.name} type="click" chosen={true} />)}</div>
        <button>Добавить</button>
      </div>
    </div>
  );
};

export default AddList;
