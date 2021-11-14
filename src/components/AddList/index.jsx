import React from "react";
import Badge from "../Badge";
import List from "../List";
import styles from "./AddList.module.scss";

const AddList = ({colors}) => {
  const [visiblePopUp, setVisiblePopUp] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(1);

  const onClose = () => {
    setVisiblePopUp(false);
  };

  return (
    <div className={styles.AddList}>
      <List
        onClick={() => setVisiblePopUp(true)}
        items={[{ name: "Добавить папку", icon: "img/plus.svg" }]}
      />
      {visiblePopUp && (
        <div className={styles.pop_up}>
          <img
            onClick={onClose}
            src="img/close.svg"
            alt="close"
            className={styles.closeBtn}
          />
          <input type="text" placeholder="Название папки" className="field" />
          <div className={styles.colors}>
            {colors.map((color) => (
              <Badge key={color.id} onClick={() => setSelectedColor(color.id)} color={color.name} type="click" chosen={selectedColor === color.id} />
            ))}
          </div>
          <button>Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddList;
