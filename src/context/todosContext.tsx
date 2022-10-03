import { createContext, useMemo, useReducer } from 'react';
import { todosReducer } from '../ducks/todoDuck';
import { ITodoContext, ITodoState, TodoContextProviderProps } from './types';

export const TodoContext = createContext({} as ITodoContext);

const INITIAL_STATE: ITodoState = {
  tasks: [],
};

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [state, dispatch] = useReducer(todosReducer, INITIAL_STATE);

  const providerMemoizedValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return <TodoContext.Provider value={providerMemoizedValue}>{children}</TodoContext.Provider>;
}
