import { FC, memo } from 'react'
import { ITask } from '@interfaces'
import styles from './task.module.scss'
import { Checkbox, DeleteTaskButton } from '@components'

interface TaskProps {
  task: ITask
  handleDeleteTask: (taskToBeDeletedId: number) => void
}

export const Task: FC<TaskProps> = memo(({ task, handleDeleteTask }) => {
  const handleCompleteTask = () => {
    task.done = true
  }

  return (
    <div className={styles.task}>
      <Checkbox isTaskDone={task.done} onTaskCompletion={handleCompleteTask} />
      {task.content}
      <DeleteTaskButton
        taskToBeDeletedId={task.id}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  )
})
