import { FC } from "react"
import { Input } from "@components"
import styles from './createTask.module.scss'
import { CreateTaskButton } from "./createTaskButton/createTaskButton"

interface CreateTaskProps {
  createTask: () => void
}

export const CreateTask: FC<CreateTaskProps> = ({ createTask }) => {
  return (
    <div className={styles.createTask}>
      <Input />
      <CreateTaskButton createTask={createTask} />
    </div>
  )
}