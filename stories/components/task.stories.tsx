import type { Meta, StoryObj } from '@storybook/react'
import { Task } from '@components'
import { TodosContext } from '@contexts'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Task',
  component: Task,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({ ...args}) => {
    const [{ task }, updateArgs] = useArgs()

    return (
      <TodosContext.Provider
        value={{
          createTask(content: string) {},
          deleteTask(taskId: string) {},
          getDoneTasksCount: () => 0,
          toggleTaskDone(taskId: string) {
            updateArgs({ task: { ...task, isDone: !task.isDone } })
          },
          tasks: [args.task],
        }}
      >
        <Task task={task} />
      </TodosContext.Provider>
    )
  }
} satisfies Meta<typeof Task>

export default meta
type Story = StoryObj<typeof meta>

export const IncompletedTask: Story = {
  args: {
    task: {
      id: '0',
      content: 'Some task to be done',
      isDone: false
    }
  }
}

export const CompletedTask: Story = {
  args: {
    task: {
      id: '1',
      content: 'Some task that has been done',
      isDone: true
    }
  }
}
