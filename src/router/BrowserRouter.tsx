import { createBrowserRouter } from 'react-router';
import { RoutePaths } from './RoutePaths';
import App from '../App';
import MainPage from '../pages/MainPage';
import DataTypes from '../pages/DataTypes';
import Generics from '../pages/Generics';
import type { JSX } from 'react';

type RoutesType = {
  path: string;
  element: JSX.Element;
}[];

const routes: RoutesType = [
  {
    path: RoutePaths.HOME,
    element: <MainPage />,
  },
  {
    path: RoutePaths.DATA_TYPES,
    element: <DataTypes />,
  },
  {
    path: RoutePaths.GENERICS,
    element: <Generics />,
  },
];

const mappedRoutes: RoutesType = routes.map((route) => {
  return {
    ...route,
    element: <App>{route.element}</App>,
  };
});

const browserRouter = createBrowserRouter(mappedRoutes);

export default browserRouter;
