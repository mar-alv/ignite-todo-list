import { FC } from 'react'
import styles from './tasksCounter.module.scss'

interface TasksCounterProps {
  tasksDoneCount: number
  totalTasksCount: number
}

export const TasksCounter: FC<TasksCounterProps> = ({
  tasksDoneCount,
  totalTasksCount
}) => {
  const tasksDoneText = tasksDoneCount !== totalTasksCount ?
    `${tasksDoneCount} de ${totalTasksCount}`
    : tasksDoneCount

  return (
    <header className={styles.tasksCounter}>
      <span>
        Tarefas criadas
        <span>
          {totalTasksCount}
        </span>
      </span>
      <span>
        Concluídas
        <span>
          {tasksDoneText}
        </span>
      </span>
    </header>
  )
}
