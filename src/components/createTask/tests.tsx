import '@testing-library/jest-dom'
import { App } from '../../app'
import { fireEvent, screen } from '@testing-library/react'
import { customRender, customRerender } from '../../../.tests/test-utils'

describe('Create Task Tests', () => {
  it('should create a task', () => {
    // arrange
    const rerender = customRender(<App />, { tasks: [] })

    // act
    const input = screen.getByTestId('input')
    fireEvent.change(input, {
      target: {
        value: 'Some task to be done'
      }
    });

    const createTaskButton = screen.getByTestId('create-task-button')
    fireEvent.click(createTaskButton)

    customRerender(rerender, <App />, {
      tasks: [
        {
          id: '0',
          content: 'Some task to be done',
          isDone: false
        }
      ]
    })

    const checkbox = screen.getByText('Some task to be done')

    // assert
    expect(checkbox).toBeInTheDocument()
  })

  /*it('should\'t create a task if the description is invalid', () => {
    // arrange
    const { rerender } = renderComponent({ tasks: [] })

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
  })*/
})
