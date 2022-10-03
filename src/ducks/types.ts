// reducer

import { ITask } from '../context/types';
import { ACTION_TYPES } from './todoDuck';

export interface ISetTaskAction {
  type: ACTION_TYPES.SET_TASK;
  payload: ITask;
}

export interface IDeleteTaskAction {
  type: ACTION_TYPES.DELETE_TASK;
  payload: {
    id: number;
  };
}

export interface IRenameTaskAction {
  type: ACTION_TYPES.RENAME_TASK;
  payload: {
    name: string;
    id: number;
  };
}

export interface IDeleteTaskActionProps {
  id: number;
}

export interface IRenameTaskActionProps {
  name: string;
  id: number;
}

export type IAction = ISetTaskAction | IDeleteTaskAction | IRenameTaskAction;
