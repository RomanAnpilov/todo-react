import React from "react";
import Badge from "../Badge";
import styles from "./List.module.scss"

const List = ({ items }) => {
  return (
    <div className={styles.list}>
      <ul>
        {items.map((item,index) => (
          <li key={index} className={item.active ? styles.active : ''}>
            <i>{item.icon ? <img width={18} height={18} src={item.icon} alt="list icon" />  : <Badge color={item.color} />}</i>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
