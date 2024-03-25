import '@testing-library/jest-dom'
import { App } from './app'
import { ITask } from '@interfaces'
import { render, screen } from '@testing-library/react'
import { TodosContext } from '@contexts'

describe('Task\'s existence tests', () => {
  function renderComponent(tasks: ITask[]) {
    render(
      <TodosContext.Provider
        value={{
          createTask(content: string) {},
          deleteTask(taskId: string) {},
          getDoneTasksCount: () => 0,
          toggleTaskDone(taskId: string) {},
          tasks
        }}
      >
        <App />
      </TodosContext.Provider>
    )
  }

  it('shouldn\'t render any task if there aren\'t tasks', () => {
    // arrange
    renderComponent([])

    // act
    const text = screen.getByText('Você ainda não tem tarefas cadastradas')

    // assert
    expect(text).toBeInTheDocument()
  })
  
  it('should render tasks if there are tasks', () => {
    // arrange
    renderComponent([{
      id: '0',
      content: 'Some task to be done',
      isDone: false
    }])

    // act
    const text = screen.getByText('Some task to be done')

    // assert
    expect(text).toBeInTheDocument()
  })
})
