import clsx from "clsx";
import type { GlobalTaskListItemJsonApiData } from "../dal/api";
import styles from './TaskItem.module.css';

type Props = {
    task: GlobalTaskListItemJsonApiData  
    isSelected: boolean 
    onTaskSelected: (taskID: string, boardId: string) => void 
}

export function TaskItem({task, isSelected, onTaskSelected}: Props) {

    const handleTaskSelected = () => onTaskSelected(task.id, task.attributes.boardId);

    const obj = {
        [styles.task] : true, 
        [styles.default] : true,
        [styles.highPriority] : task.attributes.status,
        [styles.isSelected] : isSelected,
    }

    const taskClassName = clsx(obj);

    const titleClassName = clsx({[styles.textTitle] : task.attributes.status});

    return (
        <div className={taskClassName} key={task.id} onClick={handleTaskSelected}>
            <p><b>Title: </b><span className={titleClassName}>{task.attributes.title}</span></p>
            <p><b>Status: </b><input type="checkbox" checked={task.attributes.status > 0} readOnly/></p>
            <p><b>Date create task: </b><span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span></p>
        </div>
    )
}