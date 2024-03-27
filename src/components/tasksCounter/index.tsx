import {
  Counter,
  CreatedTasks,
  StyledTasksCounter,
  TasksDone
} from './styles'
import { TodosContext } from '@contexts'
import { useContext } from 'react'

export function TasksCounter() {
  const { getDoneTasksCount, tasks } = useContext(TodosContext)

  const totalTasksCount = tasks.length
  const tasksDoneCount = getDoneTasksCount()

  const tasksDoneText = tasksDoneCount !== totalTasksCount ?
    `${tasksDoneCount} de ${totalTasksCount}`
    : tasksDoneCount

  return (
    <StyledTasksCounter>
      <CreatedTasks data-testid='created-tasks'>
        Tarefas criadas

        <Counter>
          {totalTasksCount}
        </Counter>
      </CreatedTasks>

      <TasksDone data-testid='done-tasks'>
        Concluídas

        <Counter>
          {tasksDoneText}
        </Counter>
      </TasksDone>
    </StyledTasksCounter>
  )
}
