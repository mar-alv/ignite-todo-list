import { FC, useState } from "react"
import { Input } from "@components"
import styles from './createTask.module.scss'
import { CreateTaskButton } from "./createTaskButton/createTaskButton"

interface CreateTaskProps {
  createTask: (content: string) => void
}

export const CreateTask: FC<CreateTaskProps> = ({ createTask }) => {
  const [content, setContent] = useState('')

  return (
    <div className={styles.createTask}>
      <Input content={content} setContent={setContent} />
      <CreateTaskButton content={content} createTask={createTask} />
    </div>
  )
}