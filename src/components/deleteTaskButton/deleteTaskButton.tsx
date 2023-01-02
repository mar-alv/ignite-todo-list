import { FC } from 'react'
import { Trash } from 'phosphor-react'
import { useAppDispatch } from '@store/hook'
import { deleteTask } from '@store/taskSlice'
import styles from './deleteTaskButton.module.scss'

interface DeleteTaskButtonProps {
  taskToBeDeletedId: string
}

export const DeleteTaskButton: FC<DeleteTaskButtonProps> = ({ taskToBeDeletedId }) => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(deleteTask(taskToBeDeletedId))
  }

  return (
    <button onClick={handleOnClick} className={styles.deleteTaskButton}>
      <Trash size={16} weight='bold' />
    </button>
  )
}
