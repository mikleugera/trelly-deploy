import { useState } from "react";

export function useTaskSelection() {
  const [selectedTaskID, setSelectedTaskID] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null);

  const onTaskSelected = (taskID: string, boardId: string) => {
    setSelectedTaskID(taskID);
    setBoardId(boardId);
  };

  const handleReset = () => setSelectedTaskID(null);

  return {selectedTaskID, boardId, onTaskSelected, handleReset}
}