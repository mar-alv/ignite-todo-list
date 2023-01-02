import { FC, memo } from 'react'
import { ITask } from '@interfaces'
import styles from './task.module.scss'
import { Checkbox, DeleteTaskButton } from '@components'

interface TaskProps {
  task: ITask
  handleDeleteTask: (taskToBeDeletedId: number) => void
  handleCompleteTask: (taskToBeCompletedId: number) => void
}

export const Task: FC<TaskProps> = memo(({ task, handleDeleteTask, handleCompleteTask }) => {
  return (
    <div className={styles.task}>
      <Checkbox task={task} handleCompleteTask={handleCompleteTask} />
      <DeleteTaskButton
        taskToBeDeletedId={task.id}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  )
})
