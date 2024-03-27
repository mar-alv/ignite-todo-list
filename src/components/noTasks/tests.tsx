import '@testing-library/jest-dom'
import { App } from '../../app'
import { ITask } from '@interfaces'
import { render, screen } from '@testing-library/react'
import { TodosContext } from '@contexts'

describe('No Task Tests', () => {
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
})
