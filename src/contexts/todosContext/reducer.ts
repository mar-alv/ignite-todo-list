import { ITask } from "@interfaces"
import { v4 as uuidv4 } from 'uuid'

export enum ActionType {
  CREATE_TASK = 'CREATE_TASK',
  DELETE_TASK = 'DELETE_TASK',
  TOGGLE_TASK_DONE = 'TOGGLE_TASK_DONE',
}

export type Action =
  | { type: ActionType.CREATE_TASK; payload: { content: string } }
  | { type: ActionType.DELETE_TASK; payload: { taskId: string } }
  | { type: ActionType.TOGGLE_TASK_DONE; payload: { taskId: string } }

export function todosReducer(state: ITask[], action: Action): ITask[] {
  switch (action.type) {
    case ActionType.CREATE_TASK: {
      const newTask = {
        id: uuidv4(),
        isDone: false,
        content: action.payload.content
      }

      return [ ...state, newTask]
    }

    case ActionType.DELETE_TASK: {
      const updatedTasks = state.filter(i => i.id !== action.payload.taskId)

      return updatedTasks
    }

    case ActionType.TOGGLE_TASK_DONE: {
      const updatedTasks = state.map(i => {
        if (i.id === action.payload.taskId) {
          return { ...i, isDone: !i.isDone }
        }

        return i
      })

      return updatedTasks
    }

    default:
      return state
  }
}
