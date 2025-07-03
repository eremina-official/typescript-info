import { createBrowserRouter } from 'react-router';
import { RoutePaths } from './RoutePaths';
import App from '../App';
import MainPage from '../pages/MainPage';
import DataTypes from '../pages/DataTypes';

const routes = [
  {
    path: RoutePaths.HOME,
    element: <MainPage />,
  },
  {
    path: RoutePaths.DATA_TYPES,
    element: <DataTypes />,
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
