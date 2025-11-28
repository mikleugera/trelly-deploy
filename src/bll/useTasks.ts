import { useEffect, useState } from "react";
import { getTasksList, type GlobalTaskListItemJsonApiData } from "../dal/api";

export function useTasks() {
    const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData>|null>(null);

    useEffect(() => {
        getTasksList().then(json => setTasks(json.data))
    }, [])
    
    return {tasks}
}