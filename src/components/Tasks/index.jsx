import React from "react";
import classNames from "classnames";
import styles from "./Tasks.module.scss";

import Task from "./Task";

import AppContext from "../../context"

const Tasks = ({list}) => {
    const {tasks, lists} = React.useContext(AppContext);

    return (
        <div className={classNames("todo__tasks", styles.tasks)}>
            <h1 style={{color: list && list.color.hex}}>{list && list.name}</h1>   

            <div className={styles.items}>
                {console.log(lists)}
                {tasks.filter(task => task.listId === list && list.id).map(task => <Task text={task.text}></Task>)}
            </div>
        </div>
    )   
}

export default Tasks;