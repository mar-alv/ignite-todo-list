import { FC, ChangeEvent } from 'react'
import styles from './input.module.scss'

interface InputProps {
  content: string
  setContent: (content: string) => void
}

export const Input: FC<InputProps> = ({ content, setContent }) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  return (
    <input
      value={content}
      className={styles.input}
      onChange={handleOnChange}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
