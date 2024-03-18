import {
  Counter,
  CreatedTasks,
  StyledTasksCounter,
  TasksDone
} from './styles';
import { TodosContext } from '@contexts';
import { useContext } from 'react';

export function TasksCounter() {
  const { getDoneTasksCount, tasks } = useContext(TodosContext)

  const totalTasksCount = tasks.length
  const tasksDoneCount = getDoneTasksCount()

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
