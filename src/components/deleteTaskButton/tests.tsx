import '@testing-library/jest-dom'
import { App } from '../../app'
import { ITask } from '@interfaces'
import { fireEvent, render, screen } from '@testing-library/react'
import { TodosContext } from '@contexts'

describe('Delete Task Tests', () => {
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

  it('should delete a task', () => {
    // arrange
    const { rerender } = renderComponent([
      {
        id: '0',
        content: 'Some task to be done',
        isDone: true
      }
    ])

    // act
    const createTaskButton = screen.getByTestId('delete-task-button')
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

  it('should\'t delete a task if there are no tasks', () => {
    // arrange
    renderComponent([])

    // act
    const createTaskButton = screen.queryByTestId('delete-task-button')

    // assert
    expect(createTaskButton).toBeNull()
  })
})
