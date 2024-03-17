import {
  createContext,
  ReactNode,
  useState,
} from 'react'
import { ITask } from '@interfaces'
import { v4 as uuidv4 } from 'uuid';

interface ContextType {
  tasks: ITask[],
  createTask(content: string): void,
  deleteTask(taskId: string): void,
  getDoneTasksCount(): number,
  toggleTaskDone(taskId: string): void,
}

interface Props {
  children: ReactNode
}

export const TodosContext = createContext({} as ContextType)

export function TodosProvider({ children }: Props) {
  const [tasks, setTasks] = useState<ITask[]>([])

  function getDoneTasksCount() {
    return tasks.filter(i => i.isDone).length
  }

  function createTask(content: string) {
    const newTask = {
      id: uuidv4(),
      isDone: false,
      content: content
    } as ITask

    setTasks([...tasks, newTask])
  }

  function deleteTask(taskId: string) {
    const updatedTasks = tasks.filter(task => task.id !== taskId)

    setTasks(updatedTasks)
  }

  function toggleTaskDone(taskId: string) {
    const updatedTasks = [...tasks].map(i => {
      if (i.id === taskId)
        i.isDone = !i.isDone

        return i
    })

    setTasks(updatedTasks)
  }

  return (
    <TodosContext.Provider
      value={{
        createTask,
        deleteTask,
        getDoneTasksCount,
        toggleTaskDone,
        tasks,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
