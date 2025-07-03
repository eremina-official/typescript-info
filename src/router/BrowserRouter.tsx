import { createBrowserRouter } from 'react-router';
import { RoutePaths } from './RoutePaths';
import App from '../App';
import MainPage from '../pages/MainPage';

const routes = [
  {
    path: RoutePaths.HOME,
    element: <MainPage />,
  },
  {
    path: RoutePaths.DATA_TYPES,
    element: <div>Page</div>,
  },
];

const mappedRoutes = routes.map((route) => {
  return {
    ...route,
    element: <App>{route.element}</App>,
  };
});

const browserRouter = createBrowserRouter(mappedRoutes);

export default browserRouter;
