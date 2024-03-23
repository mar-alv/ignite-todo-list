import { DeleteTaskButton } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { TodosContext } from '@contexts'

const meta: Meta = {
  title: 'Delete Task Button',
  component: DeleteTaskButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({ ...args}) => {
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
        <DeleteTaskButton taskToBeDeletedId={args.taskToBeDeletedId} />
      </TodosContext.Provider>
    )
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    taskToBeDeletedId: 0
  }
}
