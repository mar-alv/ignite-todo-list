import '@testing-library/jest-dom'
import { ITask } from '@interfaces'
import { render, screen } from '@testing-library/react'
import { TodosContext } from '@contexts'
import { TasksCounter } from '@components'

describe('TaskCounter Tests', () => {
  function renderComponent(tasks: ITask[]) {
    return render(
      <TodosContext.Provider
        value={{
          createTask(content: string) {},
          deleteTask(taskId: string) {},
          getDoneTasksCount() {
            return tasks.filter(i => i.isDone).length
          },
          toggleTaskDone(taskId: string) {},
          tasks
        }}
      >
        <TasksCounter />
      </TodosContext.Provider>
    )
  }

  it('should render 0 tasks created if no task was created', () => {
    // arrange
    renderComponent([])

    // act
    const text = screen.getByTestId('created-tasks').textContent

    // assert
    expect(text).toBe('Tarefas criadas0')
  })

  it('should render a number other than 0 if at least 1 task was created', () => {
    // arrange
    renderComponent([
      {
        id: '0',
        content: 'Some task to be done',
        isDone: false
      }
    ])

    // act
    const text = screen.getByTestId('created-tasks').textContent

    // assert
    expect(text).toBe('Tarefas criadas1')
  })

  it('should render 0 tasks done if no task was created', () => {
    // arrange
    renderComponent([])

    // act
    const text = screen.getByTestId('done-tasks').textContent

    // assert
    expect(text).toBe('Concluídas0')
  })

  it('should render 0 out of other number if at least 1 task was created and not done', () => {
    // arrange
    renderComponent([
      {
        id: '0',
        content: 'Some task to be done',
        isDone: false
      }
    ])

    // act
    const text = screen.getByTestId('done-tasks').textContent

    // assert
    expect(text).toBe('Concluídas0 de 1')
  })

  it('should render a number other than 0 if at least 1 task was done', () => {
    // arrange
    renderComponent([
      {
        id: '0',
        content: 'Some task that has been done',
        isDone: true
      }
    ])

    // act
    const text = screen.getByTestId('done-tasks').textContent

    // assert
    expect(text).toBe('Concluídas1')
  })
})
