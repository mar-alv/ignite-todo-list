import { Input } from '@components';
import type { Meta, StoryObj } from '@storybook/react';
import { TodosContext } from '@contexts';
import { useArgs, } from '@storybook/preview-api';

const meta: Meta = {
  title: 'Input',
  component: Input,
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
            return 0
          },
          toggleTaskDone: (taskId: string) => {},
          tasks: []
        }}
      >
        <Input content={content} setContent={setContent} />
      </TodosContext.Provider>
    )
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unfilled: Story = {
  args: {
    content: ''
  }
}

export const Filled: Story = {
  args: {
    content: 'Some task to be done'
  }
}
