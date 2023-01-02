import { FC, memo } from 'react'
import { ITask } from '@interfaces'
import styles from './task.module.scss'
import { Checkbox, DeleteTaskButton } from '@components'

interface TaskProps {
  task: ITask
}

export const Task: FC<TaskProps> = memo(({ task }) => {
  return (
    <div className={styles.task}>
      <Checkbox task={task} />
      <DeleteTaskButton taskToBeDeletedId={task.id} />
    </div>
  )
})
