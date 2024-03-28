import '@testing-library/jest-dom'
import { App } from '../../app'
import { customRender } from '@tests'
import { screen } from '@testing-library/react'

describe('No Task Tests', () => {
  it('shouldn not render any task if there are not tasks', () => {
    // arrange
    customRender(<App />)

    // act
    const text = screen.getByText('Você ainda não tem tarefas cadastradas')

    // assert
    expect(text).toBeInTheDocument()
  })
})
