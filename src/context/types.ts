import { Dispatch, ReactNode } from 'react';
import { IAction } from '../ducks/types';

export interface ITask {
  name: string;
  deadline: number;
  id: string;
}

export interface ITodoState {
  tasks: ITask[];
}

export type ITodoContext = {
  state: ITodoState;
  dispatch: Dispatch<IAction>;
};

export interface TodoContextProviderProps {
  children: ReactNode;
}
