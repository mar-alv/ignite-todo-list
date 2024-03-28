import { Checkbox } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { TodosContext } from '@contexts'
import { useArgs } from '@storybook/preview-api'

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
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
        <Checkbox task={tasks[0]} />
      </TodosContext.Provider>
    )
  }
}

export default meta

export const CheckedCheckbox: StoryObj = {
  args: {
    tasks: [
      {
        id: '0',
        content: 'Some task to be done',
        isDone: false
      }
    ]
  }
}

export const UncheckedCheckbox: StoryObj = {
  args: {
    tasks: [
      {
        id: '1',
        content: 'Some task that has bene done',
        isDone: true
      }
    ]
  }
}
