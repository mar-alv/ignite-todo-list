import { deleteTask } from '@store/taskSlice'
import { StyledDeleteTaskButton } from './styles'
import { Trash } from 'phosphor-react'
import { useAppDispatch } from '@store/hook'

interface Props {
  taskToBeDeletedId: string
}

export function DeleteTaskButton({ taskToBeDeletedId }: Props) {
  const dispatch = useAppDispatch();

  function handleOnClick(){
    dispatch(deleteTask(taskToBeDeletedId))
  }

  return (
    <StyledDeleteTaskButton onClick={handleOnClick}>
      <Trash size={16} weight='bold' />
    </StyledDeleteTaskButton>
  )
}
