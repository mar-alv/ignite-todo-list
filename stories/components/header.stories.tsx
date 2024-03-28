import { Header } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { TodosContext } from '@contexts'

const meta: Meta = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    return (
      <TodosContext.Provider
        value={{
          createTask(content: string) {},
          deleteTask(taskId: string) {},
          getDoneTasksCount: () => 0,
          toggleTaskDone(taskId: string) {},
          tasks: []
        }}
      >
        <Header />
      </TodosContext.Provider>
    )
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { }
