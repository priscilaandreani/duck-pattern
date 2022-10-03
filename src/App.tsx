import { Box, Button, Input } from 'dracula-ui';
import 'dracula-ui/styles/dracula-ui.css';
import { useTodosContext } from 'hooks/useTodosContext';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const { dispatchSetTask } = useTodosContext();

  return (
    <div className='App'>
      <div
        className='drac-bg-black'
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          width='xs'
          height='xs'
          rounded='lg'
          p='xs'
          mb='xs'
          color='animated'
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Input
            placeholder='Add task'
            onClick={() => {
              dispatchSetTask(inputValue);
              setInputValue('');
            }}
          />
          <Button type='button' color='white'>
            +
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default App;
