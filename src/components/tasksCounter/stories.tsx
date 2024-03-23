import { TasksCounter } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { TodosContext } from '@contexts'

const meta: Meta = {
  title: 'Tasks Counter',
  component: TasksCounter,
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
          getDoneTasksCount: () => args.doneTasksCount,
          toggleTaskDone(taskId: string) {},
          tasks: args.tasks
        }}
      >
        <TasksCounter />
      </TodosContext.Provider>
    )
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const NoTasksCreated: Story = {
  args: {
    doneTasksCount: 0,
    tasks: []
  }
}

export const FewTasksDone: Story = {
  args: {
    doneTasksCount: 1,
    tasks: [
      {}, {}
    ]
  }
}

export const AllTasksDone: Story = {
  args: {
    doneTasksCount: 2,
    tasks: [
      {}, {}
    ]
  }
}
