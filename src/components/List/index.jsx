import React from "react";
import classNames from "classnames";
import Badge from "../Badge";
import styles from "./List.module.scss";

const List = ({ items, onClick, onClickItem, activeItem }) => {
  return (
    <div className={styles.list}>
      <ul onClick={onClick}>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={onClickItem ? () => onClickItem(item) : null}
            className={classNames(
              styles[
                item.active || (activeItem && activeItem.id === item.id)
                  ? "active"
                  : ""
              ]
            )}
          >
            <i>
              {item.icon ? (
                <img width={18} height={18} src={item.icon} alt="list icon" />
              ) : (
                <Badge color={item.color.name} />
              )}
            </i>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
