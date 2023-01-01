import {
  Header,
  NoTasks,
  CreateTask,
  TasksCounter
} from '@components'
import { FC, useState } from 'react'
import styles from './app.module.scss'

export const App: FC = () => {
  const [tasks, setTasks] = useState<any>([])

  const handleCreateTask = () => {
    const tasksUpdated = [...tasks]

    tasksUpdated.push(1)

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
          <p>tralala</p>
        ) : (<NoTasks />
        )}
      </main>
    </div>
  )
}
