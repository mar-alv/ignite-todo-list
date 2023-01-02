import { FC } from 'react'
import { PlusCircle } from 'phosphor-react'
import { useAppDispatch } from '@store/hook'
import { createTask } from '@store/taskSlice'
import styles from './createTaskButton.module.scss'

interface CreateTaskButtonProps {
  content: string
}

export const CreateTaskButton: FC<CreateTaskButtonProps> = ({
  content
}) => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    if (!!content)
      dispatch(createTask(content))
  }

  return (
    <button onClick={handleOnClick} className={styles.createTaskButton}>
      Criar <PlusCircle size={16} weight='bold' />
    </button>
  )
}
