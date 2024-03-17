import { createTask } from '@store/taskSlice'
import { ChangeEvent, KeyboardEvent } from 'react'
import { StyledInput } from './styles'
import { useAppDispatch } from '@store/hook'

interface Props {
  content: string
  setContent: (content: string) => void
}

export function Input({ content, setContent }: Props) {
  const dispatch = useAppDispatch();

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value)
  }

  function handleEnterPress(e: KeyboardEvent<HTMLInputElement>) {
    if (!content || e.key !== 'Enter') return

    dispatch(createTask(content))
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
