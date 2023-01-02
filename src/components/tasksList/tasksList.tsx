import { FC } from 'react'
import { Task } from './task/task'
import { ITask } from '@interfaces'
import styles from './tasksList.module.scss'

interface TasksListProps {
  tasks: ITask[]
  handleDeleteTask: (taskToBeDeletedId: number) => void
}

export const TasksList: FC<TasksListProps> = ({
  tasks,
  handleDeleteTask
}) => {
  return (
    <article className={styles.tasksList}>
      {tasks.map(task => (
        <Task
          task={task}
          key={task.id}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </article>
  )
}
