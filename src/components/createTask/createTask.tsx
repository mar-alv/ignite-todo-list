import { Input } from "@components"
import { FC, useState } from "react"
import styles from './createTask.module.scss'
import { CreateTaskButton } from "./createTaskButton/createTaskButton"

export const CreateTask: FC = () => {
  const [content, setContent] = useState('')

  return (
    <div className={styles.createTask}>
      <Input content={content} setContent={setContent} />
      <CreateTaskButton content={content} />
    </div>
  )
}
