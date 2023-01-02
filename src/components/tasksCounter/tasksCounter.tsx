import { FC } from 'react'
import { useAppSelector } from '@store/hook';
import styles from './tasksCounter.module.scss'
import { selectTasks, selectTasksDoneCount } from '@store/taskSlice';

export const TasksCounter: FC = () => {
  const totalTasksCount = useAppSelector(selectTasks).length;
  const tasksDoneCount = useAppSelector(selectTasksDoneCount);

  const tasksDoneText = tasksDoneCount !== totalTasksCount ?
    `${tasksDoneCount} de ${totalTasksCount}`
    : tasksDoneCount

  return (
    <header className={styles.tasksCounter}>
      <span>
        Tarefas criadas
        <span>
          {totalTasksCount}
        </span>
      </span>
      <span>
        Concluídas
        <span>
          {tasksDoneText}
        </span>
      </span>
    </header>
  )
}
