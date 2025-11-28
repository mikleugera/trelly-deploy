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

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  if (!apiKey) return undefined
 
  return {
    "api-key": apiKey,
  }
}

export const getTask = (selectedTaskID: string, boardId: string | null) => {
    const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskID}`, {
      headers: prepareHeaders()   
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
      headers: prepareHeaders()  
    }).then(res => res.json())

    return promise
}