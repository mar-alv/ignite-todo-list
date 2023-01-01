import styles from './input.module.scss'

export const Input = () => {
  return (
    <input
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
