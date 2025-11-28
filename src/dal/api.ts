type 	TaskDetailsDto = {
  title: string
  boardTitle: string
  description: string | null
}

export type TaskDetailsData = {
  id: string
  attributes: TaskDetailsDto
}

type GetTaskOutput = {
  data: TaskDetailsData
}

export const getTask = (selectedTaskID: string, boardId: string | null) => {
    const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskID}`, {
      headers:{
        'api-key': import.meta.env.VITE_API_KEY
      }     
    }).then(res => res.json())

    return promise
}    

type GlobalTaskListItemDto = {
    id: string
    title: string
    boardId: string
    status: number
    priority: number
    addedAt: string
    attachmentsCount: number
}

export type GlobalTaskListItemJsonApiData = {
    id: string  
    type: string
    attributes: GlobalTaskListItemDto
}

type GlobalTaskListResponse = {
  data: Array<GlobalTaskListItemJsonApiData>
}

export const getTasksList = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY
      }
    }).then(res => res.json())

    return promise
}