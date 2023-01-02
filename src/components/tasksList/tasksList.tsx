import { FC } from 'react'
import { Task } from './task/task'
import styles from './tasksList.module.scss'
import { useAppSelector } from '@store/hook';
import { selectTasks } from '@store/taskSlice';

export const TasksList: FC = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <article className={styles.tasksList}>
      {tasks.map(task => <Task task={task} key={task.id} />)}
    </article>
  )
}
