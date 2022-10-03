import { useCallback, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { TodoContext } from '../context/todosContext';
import { setTaskAction } from '../ducks/todoDuck';

export function useTodosContext() {
  const { state, dispatch } = useContext(TodoContext);

  const dispatchSetTask = useCallback(
    (name: string) =>
      dispatch(
        setTaskAction({
          deadline: 10,
          name,
          id: uuid(),
        })
      ),
    [dispatch]
  );

  return { state, dispatchSetTask };
}
