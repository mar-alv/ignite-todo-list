import { CreateTaskButton } from '@components';
import type { Meta, StoryObj } from '@storybook/react';
import { TodosContext } from '@contexts';

const meta: Meta = {
  title: 'Create Task Button',
  component: CreateTaskButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render:({ ...args}) => {
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
        <CreateTaskButton content={args.content} setContent={args.setContent} />
      </TodosContext.Provider>
    )
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    content: '',
    setContent(content: string) {}
  }
}

export const Enabled: Story = {
  args: {
    content: 'Some task to be done',
    setContent(content: string) {}
  }
}
