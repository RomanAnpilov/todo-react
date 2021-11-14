import React from "react";
import classNames from "classnames";
import styles from "./Tasks.module.scss";


const Task = ({ text, id, completed, list }) => {
  return (
    <div key={id} className={styles.task}>
      <div className={classNames(styles.checkBox, styles.finished)}>
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <span>{text}</span>
      <img src="img/remove.svg" alt="remove" />
    </div>
  );
};

export default Task;
