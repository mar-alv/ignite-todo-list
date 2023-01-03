import styles from './input.module.scss'
import { useAppDispatch } from '@store/hook'
import { createTask } from '@store/taskSlice'
import { FC, ChangeEvent, KeyboardEvent } from 'react'

interface InputProps {
  content: string
  setContent: (content: string) => void
}

export const Input: FC<InputProps> = ({ content, setContent }) => {
  const dispatch = useAppDispatch();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!!content && e.key === 'Enter')
      dispatch(createTask(content))
  }

  return (
    <input
      value={content}
      className={styles.input}
      onChange={handleOnChange}
      onKeyDown={handleEnterPress}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
