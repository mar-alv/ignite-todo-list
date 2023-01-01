import { Header } from '@components'
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
      <Header createTask={handleCreateTask} />
      <main>
        <header>
          <p>oi</p>
          <p>oi</p>
        </header>
      </main>
    </div>
  )
}
