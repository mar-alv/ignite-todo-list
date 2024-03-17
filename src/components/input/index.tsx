import { ChangeEvent, KeyboardEvent, useContext } from 'react'
import { StyledInput } from './styles'
import { TodosContext } from '@contexts'

interface Props {
  content: string
  setContent: (content: string) => void
}

export function Input({ content, setContent }: Props) {
  const { createTask } = useContext(TodosContext)

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value)
  }

  function handleEnterPress(e: KeyboardEvent<HTMLInputElement>) {
    if (!content || e.key !== 'Enter') return

    createTask(content)
    setContent('')
  }

  return (
    <StyledInput
      onChange={handleOnChange}
      onKeyDown={handleEnterPress}
      placeholder="Adicione uma nova tarefa"
      value={content}
    />
  )
}
