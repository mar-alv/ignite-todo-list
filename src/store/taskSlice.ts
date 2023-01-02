import { ITask } from '@interfaces';
import { RootState } from './store';
import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TaskState {
  tasks: ITask[],
  content: string
}

const initialState: TaskState = {
  tasks: [],
  content: ''
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      const newTask = {
        id: uuidv4(),
        isDone: false,
        content: action.payload
      } as ITask

      state.tasks = [...state.tasks, newTask]
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.tasks.map(task => {
        if (task.id === action.payload)
          task.isDone = !task.isDone
      })
    }
  },
});

export const { createTask, deleteTask, completeTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.taskReducer.tasks;
export const selectTasksDoneCount = (state: RootState) => state.taskReducer.tasks.filter(task => task.isDone).length;

export default taskSlice.reducer;
