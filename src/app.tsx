import {
  Header,
  NoTasks,
  TasksList,
  CreateTask,
  TasksCounter
} from '@components'
import { FC } from 'react'
import styles from './app.module.scss'
import { useAppSelector } from '@store/hook';
import { selectTasks } from '@store/taskSlice';

export const App: FC = () => {
  const isThereAnyTask = !!useAppSelector(selectTasks).length;

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <CreateTask />
        <TasksCounter />
        {isThereAnyTask ? (<TasksList />) : (<NoTasks />)}
      </main>
    </div>
  )
}
