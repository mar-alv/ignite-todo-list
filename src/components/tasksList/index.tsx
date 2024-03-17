import { selectTasks } from '@store/taskSlice';
import { StyledTasksList } from './styles';
import { Task } from './task'
import { useAppSelector } from '@store/hook';

export function TasksList() {
  const tasks = useAppSelector(selectTasks);

  return (
    <StyledTasksList>
      {tasks.map(task => <Task task={task} key={task.id} />)}
    </StyledTasksList>
  )
}
