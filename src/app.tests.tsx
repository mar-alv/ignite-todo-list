import '@testing-library/jest-dom'
import { App } from './app'
import { render, screen } from '@testing-library/react'
import { TodosContext } from '@contexts'

it('should render NoTasks if there aren\'t tasks', () => {
  // arrange
  render(
    <TodosContext.Provider
			value={{
			createTask(content: string) {},
			deleteTask(taskId: string) {},
			getDoneTasksCount: () => 0,
			toggleTaskDone(taskId: string) {},
			tasks: []
			}}
    >
    	<App />
  </TodosContext.Provider>)

  // act
  const text = screen.getByText('Você ainda não tem tarefas cadastradas')

  // assert
  expect(text).toBeInTheDocument()
})
