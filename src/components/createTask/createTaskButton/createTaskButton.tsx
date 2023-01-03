import { FC } from 'react'
import { PlusCircle } from 'phosphor-react'
import { useAppDispatch } from '@store/hook'
import { createTask } from '@store/taskSlice'
import styles from './createTaskButton.module.scss'

interface CreateTaskButtonProps {
  content: string
  setContent: (content: string) => void
}

export const CreateTaskButton: FC<CreateTaskButtonProps> = ({
  content,
  setContent
}) => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    if (!!content) {
      dispatch(createTask(content))
      setContent('')
    }
  }

  return (
    <button onClick={handleOnClick} className={styles.createTaskButton}>
      Criar <PlusCircle size={16} weight='bold' />
    </button>
  )
}
