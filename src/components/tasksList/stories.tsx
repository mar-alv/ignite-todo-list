import { ITask } from '@interfaces'
import type { Meta, StoryObj } from '@storybook/react'
import { TodosContext } from '@contexts'
import { TasksList } from '@components'
import { useArgs } from '@storybook/preview-api'

const meta: Meta = {
  title: 'Tasks List',
  component: TasksList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ tasks }, updateArgs] = useArgs()

    return (
      <TodosContext.Provider
        value={{
          createTask(content: string) {},
          deleteTask(taskId: string) {},
          getDoneTasksCount: () => 0,
          toggleTaskDone(taskId: string) {
            updateArgs({ tasks: [...tasks].map(i => {
              if (i.id === taskId) {
                return { ...i, isDone: !i.isDone }
              }
      
              return i
            })})
          },
          tasks
        }}
      >
        <TasksList />
      </TodosContext.Provider>
    )
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const EmptyList: Story = {
  args: {
    tasks: []
  }
}

export const FilledList: Story = {
  args: {
    tasks: [
      {
        id: '0',
        content: 'Some task to be done',
        isDone: false,
      },
      {
        id: '1',
        content: 'Some task that has been done',
        isDone: true,
      }
    ]
  }
}
