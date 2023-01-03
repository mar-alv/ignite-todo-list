import { ITask } from '@interfaces'
import { Check } from 'phosphor-react'
import styles from './checkbox.module.scss'
import { useAppDispatch } from '@store/hook'
import { completeTask } from '@store/taskSlice'
import { FC, useRef, KeyboardEvent, MutableRefObject } from 'react'

interface CheckboxProps {
  task: ITask
}

export const Checkbox: FC<CheckboxProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { id, isDone, content } = task
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>

  const handleOnChange = () => {
    dispatch(completeTask(id))
  }

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current.checked = !inputRef.current.checked

      dispatch(completeTask(id))
    }
  }

  return (
    <span>
      {isDone && (
        <span className={styles.checkIcon}>
          <Check size={12} />
        </span>
      )}
      <input
        ref={inputRef}
        type='checkbox'
        id={`checkbox${id}`}
        onChange={handleOnChange}
        className={styles.checkbox}
        onKeyDown={handleEnterPress}
      />
      <label htmlFor={`checkbox${id}`}>
        {content}
      </label>
    </span >
  )
}
