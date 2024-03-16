import { defaultTheme } from './styles/themes/default'
import {
  CreateTask,
  Header,
  NoTasks,
  /*
  TasksList,
  TasksCounter
  */
} from '@components'
import { GlobalStyle } from './styles/global'
import { selectTasks } from '@store/taskSlice';
import { ThemeProvider } from 'styled-components'
import { useAppSelector } from '@store/hook';

export function App() {
  const isThereAnyTask = !!useAppSelector(selectTasks).length;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div id='app'>
        <Header />

        <main>
          <CreateTask />

          {isThereAnyTask ? (<TasksList />) : (<NoTasks />)}
          {/* 
          <TasksCounter />
          */}
        </main>
      </div>
    </ThemeProvider>
  )
}
