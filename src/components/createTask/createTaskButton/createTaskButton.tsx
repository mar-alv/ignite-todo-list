import { FC } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './createTaskButton.module.scss'

interface CreateTaskButtonProps {
  content: string
  createTask: (content: string) => void
}

export const CreateTaskButton: FC<CreateTaskButtonProps> = ({
  content,
  createTask
}) => {
  const handleOnClick = () => {
    if (!!content)
      createTask(content)
  }

  return (
    <button onClick={handleOnClick} className={styles.createTaskButton}>
      Criar <PlusCircle size={16} weight='bold' />
    </button>
  )
}
