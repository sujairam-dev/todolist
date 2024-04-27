import '@mantine/core/styles.css';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import routeConfig from './router/route';

function App() {
  return(
    <MantineProvider>
      <RouterProvider router={routeConfig} />
    </MantineProvider>
  )
}

export default App;
