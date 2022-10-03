import { ITask, ITodoState } from '../context/types';
import { IAction, ISetTaskAction } from './types';

// action types
export enum ACTION_TYPES {
  SET_TASK = 'TODOS/SET_TASKS',
  DELETE_TASK = 'TODOS/DELETE_TASK',
  RENAME_TASK = 'TODOS/RENAME_TASK',
}

// reducer
export const todosReducer = (state: ITodoState, action: IAction): ITodoState => {
  switch (action.type) {
    case ACTION_TYPES.SET_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

// action creators
export function setTaskAction(task: ITask): ISetTaskAction {
  return {
    type: ACTION_TYPES.SET_TASK,
    payload: task,
  };
}
