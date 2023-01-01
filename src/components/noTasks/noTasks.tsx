import { FC } from "react"
import styles from './noTasks.module.scss'
import clipboard from '@assets/clipboard.svg'

export const NoTasks: FC = () => {
  return (
    <article className={styles.noTasks}>
      <img src={clipboard} alt='Ícone de prancheta' />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <h3>Crie tarefas e organize seus itens a fazer</h3>
    </article>
  )
}