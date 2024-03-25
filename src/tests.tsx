import '@testing-library/jest-dom'
import { App } from './app'
import { ITask } from '@interfaces'
import { fireEvent, render, screen } from '@testing-library/react'
import { TodosContext } from '@contexts'

describe('Task\'s existence tests', () => {
  function renderComponent(tasks: ITask[]) {
    return render(
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

  it('should create a task', () => {
    // arrange
    const { rerender } = renderComponent([])

    // act
    const input = screen.getByTestId('input')
    fireEvent.change(input, {
      target: {
        value: 'Some task to be done'
      }
    });

    const createTaskButton = screen.getByTestId('create-task-button')
    fireEvent.click(createTaskButton)

    rerender(
      <TodosContext.Provider
        value={{
          createTask(content: string) {},
          deleteTask(taskId: string) {},
          getDoneTasksCount: () => 0,
          toggleTaskDone(taskId: string) {},
          tasks: [{
            id: '0',
            content: 'Some task to be done',
            isDone: false
          }]
        }}
      >
        <App />
      </TodosContext.Provider>
    )

    const checkbox = screen.getByText('Some task to be done')

    // assert
    expect(checkbox).toBeInTheDocument()
  })
})
