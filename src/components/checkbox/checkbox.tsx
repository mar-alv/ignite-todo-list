import { FC } from 'react'
import { ITask } from '@interfaces'
import { Check } from 'phosphor-react'
import styles from './checkbox.module.scss'
import { useAppDispatch } from '@store/hook'
import { completeTask } from '@store/taskSlice'

interface CheckboxProps {
  task: ITask
}

export const Checkbox: FC<CheckboxProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { id, isDone, content } = task

  const handleOnChange = () => {
    dispatch(completeTask(id))
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
