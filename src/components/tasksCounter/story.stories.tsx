import { TasksCounter } from '@components';
import type { Meta, StoryObj } from '@storybook/react';
import { TodosContext } from '@contexts';
import { useArgs, } from '@storybook/preview-api';

const meta: Meta = {
  title: 'Tasks Counter',
  component: TasksCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render:({ ...args}) => {
    const [{ content }, updateArgs] = useArgs();

    function setContent(value: string) {
      updateArgs({ content: value })
    }

    return (
      <TodosContext.Provider
        value={{
          createTask: (content: string) => {},
          deleteTask: (taskId: string) => {},
          getDoneTasksCount: () => {
            return args.doneTasksCount
          },
          toggleTaskDone: (taskId: string) => {},
          tasks: args.tasks
        }}
      >
        <TasksCounter />
      </TodosContext.Provider>
    )
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

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
