import { useEffect, useState } from "react";
import { getTask, type TaskDetailsData } from "../dal/api";

export function useTaskDetails(selectedTaskID: string | null, boardId: string | null) {
  const [taskDetails, setTaskDetails] = useState<TaskDetailsData|null>(null);
  
  useEffect(() => {
    if(!selectedTaskID) {
      setTaskDetails(null)
      return
    }

    getTask(selectedTaskID, boardId).then(json => setTaskDetails(json.data))
  }, [selectedTaskID])

    return {taskDetails}
}