import { useTaskSelection } from './bll/useTaskSelection';
import styles from './MainPage.module.css';
import { TaskDetails } from './ui/TaskDetails';
import { TasksList } from './ui/TasksList';

export function MainPage() {
  const {selectedTaskID, boardId, onTaskSelected, handleReset} = useTaskSelection();

  return <div>
    <div className={styles.container}>
      <TasksList onTaskSelected={onTaskSelected} onReset={handleReset} selectedTaskID={selectedTaskID} />
      <TaskDetails selectedTaskID={selectedTaskID} boardId={boardId} />
    </div>
  </div>;
}
