import { FC, useState } from 'react'
import styles from './app.module.scss'
import { Header, CreateTask, NoTasks } from '@components'

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
        <header>
          <span>Tarefas criadas</span>
          <span>Concluídas</span>
        </header>
        {!!tasks.length ? (
          <p>tralala</p>
        ) : (<NoTasks />
        )}
      </main>
    </div>
  )
}
