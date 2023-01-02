import { FC } from 'react'
import { Check } from 'phosphor-react'
import styles from './checkbox.module.scss'

interface CheckboxProps {
  isTaskDone: boolean
  onTaskCompletion: () => void
}

export const Checkbox: FC<CheckboxProps> = ({ isTaskDone, onTaskCompletion }) => {
  const handleOnChange = () => {
    onTaskCompletion()
  }

  return (
    <>
      {isTaskDone && (
        <span className={styles.checkIcon}>
          <Check size={12} />
        </span>
      )}
      <input
        type='checkbox'
        onChange={handleOnChange}
        className={styles.checkbox}
      />
    </>
  )
}
