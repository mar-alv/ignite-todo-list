import { useAppSelector } from '@store/hook';
import { selectTasks, selectTasksDoneCount } from '@store/taskSlice';
import {
  Counter,
  CreatedTasks,
  StyledTasksCounter,
  TasksDone
} from './styles';

export function TasksCounter() {
  const totalTasksCount = useAppSelector(selectTasks).length;
  const tasksDoneCount = useAppSelector(selectTasksDoneCount);

  const tasksDoneText = tasksDoneCount !== totalTasksCount ?
    `${tasksDoneCount} de ${totalTasksCount}`
    : tasksDoneCount

  return (
    <StyledTasksCounter>
      <CreatedTasks>
        Tarefas criadas

        <Counter>
          {totalTasksCount}
        </Counter>
      </CreatedTasks>

      <TasksDone>
        Concluídas

        <Counter>
          {tasksDoneText}
        </Counter>
      </TasksDone>
    </StyledTasksCounter>
  )
}
