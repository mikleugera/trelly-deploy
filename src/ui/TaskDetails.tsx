import { useTaskDetails } from "../bll/useTaskDetails";
import styles from './TaskDetails.module.css';

type Props = {
  selectedTaskID: string | null
  boardId: string | null
}

export function TaskDetails(props: Props) {
  const {selectedTaskID, boardId} = props

  const {taskDetails} = useTaskDetails(selectedTaskID, boardId);

  return (
    <div className={styles.task}>
        <h2>Task details</h2>
        {!taskDetails && 'Task is not selected'}
        {taskDetails && selectedTaskID && taskDetails.id !== selectedTaskID && 'Loading...'}
        {taskDetails &&
            <div>
                <h3>{taskDetails.attributes.title}</h3>  
                <h4>{taskDetails.attributes.boardTitle}</h4>  
                <p>{taskDetails.attributes.description ?? 'no desription'}</p>  
            </div>
        }
    </div> 
  )
}

