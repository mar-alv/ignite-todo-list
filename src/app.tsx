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
      done: false
    } as ITask

    const tasksUpdated = [...tasks, newTask]

    setId(id + 1)
    setTasks(tasksUpdated)
  }

  const handleDeleteTask = (taskToBeDeletedId: number) => {
    const tasksUpdated = tasks.filter(task => task.id !== taskToBeDeletedId)

    setTasks(tasksUpdated)
  }

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <CreateTask createTask={handleCreateTask} />
        <TasksCounter
          tasksDoneCount={0}
          totalTasksCount={tasks.length}
        />
        {!!tasks.length ? (
          <TasksList tasks={tasks} handleDeleteTask={handleDeleteTask} />
        ) : (
          <NoTasks />
        )}
      </main>
    </div>
  )
}
