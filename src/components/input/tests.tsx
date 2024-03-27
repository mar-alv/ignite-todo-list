import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from '@components'
import { TodosContext } from '@contexts'

describe('Input tests', () => {
  let content = ''

  function renderComponent() {
    return render(
      <TodosContext.Provider
        value={{
          createTask(newContent: string) {
            content = newContent
          },
          deleteTask(taskId: string) {},
          getDoneTasksCount: () => 0,
          toggleTaskDone(taskId: string) {},
          tasks: []
        }}
      >
        <Input content={content} setContent={(content: string) => {}} />
      </TodosContext.Provider>
    )
  }

  it('should clean the input after creating a task', () => {
    // arrange
    const { rerender } = renderComponent()

    // act
    const input = screen.getByTestId('input')

    fireEvent.change(input, {
      target: {
        value: 'Some task to be done'
      }
    });

    fireEvent.keyDown(input, {
      key: 'Enter',
      keyCode: 13
    })

    rerender(
      <Input
        content={content}
        setContent={(content: string) => {}}
      />
    )

    const checkbox = screen.queryByText('Some task to be done')

    // assert
    expect(checkbox).toBeNull()
  })
})
