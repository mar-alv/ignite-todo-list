import { createTask } from '@store/taskSlice'
import { PlusCircle } from 'phosphor-react'
import { StyledCreateTaskButton } from './styles'
import { useAppDispatch } from '@store/hook'

interface Props {
  content: string
  setContent: (content: string) => void
}

export function CreateTaskButton({content, setContent}: Props) {
  const dispatch = useAppDispatch();

  function handleOnClick(){
    if (!content) return

    dispatch(createTask(content))
    setContent('')
  }

  return (
    <StyledCreateTaskButton onClick={handleOnClick}>
      Criar <PlusCircle size={16} weight='bold' />
    </StyledCreateTaskButton>
  )
}
