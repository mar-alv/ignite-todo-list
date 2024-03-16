import clipboard from '@assets/clipboard.svg'
import {
  NoTasksDescription,
  NoTasksImg,
  NoTasksTitle,
  StyledNoTasks
} from "./styles"

export function NoTasks() {
  return (
    <StyledNoTasks>
      <NoTasksImg src={clipboard} alt='Ícone de prancheta' />

      <NoTasksTitle>
        Você ainda não tem tarefas cadastradas
        </NoTasksTitle>

      <NoTasksDescription>
        Crie tarefas e organize seus itens a fazer
        </NoTasksDescription>
    </StyledNoTasks>
  )
}
