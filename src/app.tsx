import {
  Header,
  NoTasks,
  TasksList,
  CreateTask,
  TasksCounter
} from '@components'
import { ITask } from '@interfaces'
import { FC, useState } from 'react'
import styles from './app.module.scss'

export const App: FC = () => {
  const [id, setId] = useState(0)
  const [tasks, setTasks] = useState<ITask[]>([])

  const handleCreateTask = (content: string) => {
    const newTask = {
      id,
      content,
      isDone: false
    } as ITask

    const tasksUpdated = [...tasks, newTask]

    setId(id + 1)
    setTasks(tasksUpdated)
  }

  const handleDeleteTask = (taskToBeDeletedId: number) => {
    const tasksUpdated = [...tasks].filter(task => task.id !== taskToBeDeletedId)

    setTasks(tasksUpdated)
  }

  const handleCompleteTask = (taskToBeCompletedId: number) => {
    const updatedTasks = [...tasks]
    const completedTask = updatedTasks.find(task => task.id === taskToBeCompletedId)

    if (completedTask) {
      completedTask.isDone = !completedTask.isDone

      setTasks(updatedTasks)
    }
  }

  const getTasksDoneCount = () => {
    return tasks.filter(task => task.isDone).length
  }

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <CreateTask createTask={handleCreateTask} />
        <TasksCounter
          totalTasksCount={tasks.length}
          tasksDoneCount={getTasksDoneCount()}
        />
        {!!tasks.length ? (
          <TasksList
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        ) : (
          <NoTasks />
        )}
      </main>
    </div>
  )
}
