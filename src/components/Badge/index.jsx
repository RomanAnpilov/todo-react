import React from "react";
import classNames from "classnames";
import styles from "./Badge.module.scss";

const Badge = ({ color, onClick, type = "", chosen = false }) => {
  return (
    <i
    onClick={onClick}
      className={classNames(
        styles.badge,
        styles[color],
        styles[type],
        chosen ? styles.selected : ""
      )}
    ></i>
  );
};

export default Badge;
