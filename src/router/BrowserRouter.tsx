import { createBrowserRouter } from 'react-router';
import RoutePaths, { type RouteKey } from './RoutePaths';
import App from '../App';
import MainPage from '../pages/MainPage';
import DataTypes from '../pages/DataTypes';
import GenericsPage from '../pages/GenericsPage';
import RecordPage from '../pages/RecordPage';
import type { JSX } from 'react';

const routeElements: Record<RouteKey, JSX.Element> = {
  HOME: <MainPage />,
  DATA_TYPES: <DataTypes />,
  GENERICS: <GenericsPage />,
  RECORD: <RecordPage />,
};

const routes = (Object.keys(RoutePaths) as RouteKey[]).map((key) => ({
  path: RoutePaths[key],
  element: <App>{routeElements[key]}</App>,
}));

const browserRouter = createBrowserRouter(routes);

export default browserRouter;
