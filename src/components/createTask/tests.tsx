import '@testing-library/jest-dom'
import { App } from '../../app'
import { ITask } from '@interfaces'
import { fireEvent, render, screen } from '@testing-library/react'
import { TodosContext } from '@contexts'

describe('Create Task Tests', () => {
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

  it('should\'t create a task if the description is invalid', () => {
    // arrange
    const { rerender } = renderComponent([])

    // act
    const createTaskButton = screen.getByTestId('create-task-button')
    fireEvent.click(createTaskButton)

    rerender(
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
      </TodosContext.Provider>
    )

    const checkbox = screen.queryByText('Some task to be done')

    // assert
    expect(checkbox).toBeNull()
  })
})
