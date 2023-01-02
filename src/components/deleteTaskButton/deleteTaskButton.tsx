import { FC } from 'react'
import { Trash } from 'phosphor-react'
import styles from './deleteTaskButton.module.scss'

interface DeleteTaskButtonProps {
  taskToBeDeletedId: number
  handleDeleteTask: (taskToBeDeletedId: number) => void
}

export const DeleteTaskButton: FC<DeleteTaskButtonProps> = ({
  handleDeleteTask,
  taskToBeDeletedId
}) => {
  const handleOnClick = () => {
    handleDeleteTask(taskToBeDeletedId)
  }

  return (
    <button onClick={handleOnClick} className={styles.deleteTaskButton}>
      <Trash size={16} weight='bold' />
    </button>
  )
}
