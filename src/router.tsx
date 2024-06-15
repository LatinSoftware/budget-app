import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './routes/root';
import Home from './pages/home/page';
import Contacts from './pages/contacts/page';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/contacts',
      element: <Contacts />,
    },
  ]);

  return <RouterProvider router={router} />;
}
