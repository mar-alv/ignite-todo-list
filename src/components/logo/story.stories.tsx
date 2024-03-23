import { Logo } from '@components';
import type { Meta, StoryObj } from '@storybook/react';
import { TodosContext } from '@contexts';
import { useArgs, } from '@storybook/preview-api';

const meta: Meta = {
  title: 'Logo',
  component: Logo,
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
        <Logo />
      </TodosContext.Provider>
    )
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
