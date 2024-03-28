import '@testing-library/jest-dom'
import { customRender } from '@tests'
import { screen } from '@testing-library/react'
import { TasksCounter } from '@components'

describe('TaskCounter Tests', () => {
  it('should render 0 tasks created if no task was created', () => {
    // arrange
    customRender(<TasksCounter />)

    // act
    const text = screen.getByTestId('created-tasks').textContent

    // assert
    expect(text).toBe('Tarefas criadas0')
  })

  it('should render a number other than 0 if at least 1 task was created', () => {
    // arrange
    customRender(<TasksCounter />, {
      tasks: [
        {
          id: '0',
          content: 'Some task to be done',
          isDone: false
        }
      ]
    })

    // act
    const text = screen.getByTestId('created-tasks').textContent

    // assert
    expect(text).toBe('Tarefas criadas1')
  })

  it('should render 0 tasks done if no task was created', () => {
    // arrange
    customRender(<TasksCounter />)

    // act
    const text = screen.getByTestId('done-tasks').textContent

    // assert
    expect(text).toBe('Concluídas0')
  })

  it('should render 0 out of other number if at least 1 task was created and not done', () => {
    // arrange
    customRender(<TasksCounter />, {
      tasks: [
        {
          id: '0',
          content: 'Some task to be done',
          isDone: false
        }
      ]
    })

    // act
    const text = screen.getByTestId('done-tasks').textContent

    // assert
    expect(text).toBe('Concluídas0 de 1')
  })

  it('should render a number other than 0 if at least 1 task was done', () => {
    // arrange
    customRender(<TasksCounter />, {
      tasks: [
        {
          id: '0',
          content: 'Some task that has been done',
          isDone: true
        }
      ],
      getDoneTasksCount: () => 1
    })

    // act
    const text = screen.getByTestId('done-tasks').textContent

    // assert
    expect(text).toBe('Concluídas1')
  })
})
