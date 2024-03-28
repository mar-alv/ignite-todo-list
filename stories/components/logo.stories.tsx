import { Logo } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { TodosContext } from '@contexts'

const meta: Meta = {
  title: 'Logo',
  component: Logo,
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
        <Logo />
      </TodosContext.Provider>
    )
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
