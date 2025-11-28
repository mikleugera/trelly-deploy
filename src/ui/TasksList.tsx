import { useTasks } from "../bll/useTasks";
import { TaskItem } from "./TaskItem";

type Props = {
  onTaskSelected: (taskID: string, boardId: string) => void 
  onReset: () => void
  selectedTaskID: string | null
}

export function TasksList({onTaskSelected, onReset, selectedTaskID}: Props) {
  const {tasks} = useTasks();

  if(tasks === null) {
      return "Loading";
  }

  // if(tasks.length === 0) {
  //   return "Tasks empty";

  return (
    <div>
        <button onClick={onReset}>Reset</button>
        {
          tasks.map((task) => {
            return(
              <TaskItem key={task.id}
                        task={task} 
                        isSelected={task.id === selectedTaskID} 
                        onTaskSelected={onTaskSelected}
              />
            )
          })
        }
    </div>
  )
}

