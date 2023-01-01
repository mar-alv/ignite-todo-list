import { FC } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './createTaskButton.module.scss'

interface CreateTaskButtonProps {
  createTask: () => void
}

export const CreateTaskButton: FC<CreateTaskButtonProps> = ({
  createTask
}) => {
  return (
    <button onClick={createTask} className={styles.createTaskButton}>
      Criar <PlusCircle size={16} weight='bold' />
    </button>
  )
}