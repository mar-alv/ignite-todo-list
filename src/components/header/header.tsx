import { FC } from "react"
import styles from './header.module.scss'
import { Logo, CreateTask } from "@components"

interface HeaderProps {
  createTask: () => void
}

export const Header: FC<HeaderProps> = ({ createTask }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <CreateTask createTask={createTask} />
    </header>
  )
}
