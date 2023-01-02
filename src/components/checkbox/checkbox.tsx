import { FC } from 'react'
import { ITask } from '@interfaces'
import { Check } from 'phosphor-react'
import styles from './checkbox.module.scss'

interface CheckboxProps {
  task: ITask
  handleCompleteTask: (taskToBeCompletedId: number) => void
}

export const Checkbox: FC<CheckboxProps> = ({
  task,
  handleCompleteTask
}) => {
  const { id, isDone, content } = task

  const handleOnChange = () => {
    handleCompleteTask(id)
  }

  return (
    <span>
      {isDone && (
        <span className={styles.checkIcon}>
          <Check size={12} />
        </span>
      )}
      <input
        type='checkbox'
        id={`checkbox${id}`}
        onChange={handleOnChange}
        className={styles.checkbox}
      />
      <label htmlFor={`checkbox${id}`}>
        {content}
      </label>
    </span >
  )
}
