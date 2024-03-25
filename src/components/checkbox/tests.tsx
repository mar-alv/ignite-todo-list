import '@testing-library/jest-dom'
import { Checkbox } from '@components'
import { ITask } from '@interfaces'
import { fireEvent, render, screen } from '@testing-library/react'
import { TodosContext } from '@contexts'

describe('Checkbox tests', () => {
  const taskDone = {
    id: '0',
    content: 'Some task to be done',
    isDone: true
  }

  const taskNotDone = {
    id: '0',
    content: 'Some task to be done',
    isDone: false
  }

  function renderComponent(task: ITask) {
    return render(
      <TodosContext.Provider
        value={{
          createTask(content: string) {},
          deleteTask(taskId: string) {},
          getDoneTasksCount: () => 0,
          toggleTaskDone(taskId: string) {},
          tasks: [task]
        }}
      >
        <Checkbox task={task} />
      </TodosContext.Provider>
    )
  }

  it('should show the check icon if the task is done', () => {
    // arrange
    renderComponent(taskDone)

    // act
    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeInTheDocument()
  })

  it('should not show the check icon if the task is not done', () => {
    // arrange
    renderComponent(taskNotDone)

    // act
    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeNull()
  })

  it('should toggle the task as done when clicking on its label', () => {
    // arrange
    const { rerender } = renderComponent(taskNotDone)

    // act
    const checkbox = screen.getByText('Some task to be done')

    fireEvent.click(checkbox)

    rerender(<Checkbox task={taskDone} />)

    const checkIcon = screen.queryByRole('check-icon')
  
    // assert
    expect(checkIcon).toBeInTheDocument()
  })

  it('should toggle the task as not done when clicking on its label', () => {
    // arrange
    const { rerender } = renderComponent(taskDone)

    // act
    const checkbox = screen.getByText('Some task to be done')

    fireEvent.click(checkbox)

    rerender(<Checkbox task={taskNotDone} />)

    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeNull()
  })

  it('should toggle the task as done when clicking on enter by having its checkbox focused', () => {
    // arrange
    const { rerender } = renderComponent(taskNotDone)

    // act
    const checkbox = screen.getByTestId('checkbox0')

    fireEvent.keyDown(checkbox, {
      key: 'Enter',
      keyCode: 13
    })

    rerender(<Checkbox task={taskDone} />)

    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeInTheDocument()
  })

  it('should toggle the task as not done when clicking on enter by having its checkbox focused', () => {
    // arrange
    const { rerender } = renderComponent(taskDone)

    // act
    const checkbox = screen.getByTestId('checkbox0')

    fireEvent.keyDown(checkbox, {
      key: 'Enter',
      keyCode: 13
    })

    rerender(<Checkbox task={taskNotDone} />)

    const checkIcon = screen.queryByRole('check-icon')

    // assert
    expect(checkIcon).toBeNull()
  })
})
