import { PlusCircle } from 'phosphor-react'
import { StyledCreateTaskButton } from './styles'
import { TodosContext } from '@contexts'
import { useContext } from 'react'

interface Props {
  content: string
  setContent: (content: string) => void
}

export function CreateTaskButton({content, setContent}: Props) {
  const { createTask } = useContext(TodosContext)

  function handleOnClick(){
    if (!content) return

    createTask(content)
    setContent('')
  }

  return (
    <StyledCreateTaskButton disabled={!content} onClick={handleOnClick} >
      Criar <PlusCircle size={16} weight='bold' />
    </StyledCreateTaskButton>
  )
}
