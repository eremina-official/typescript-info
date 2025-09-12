import { createBrowserRouter } from 'react-router';
import RoutePaths, { PathKeys } from './RoutePaths';
import App from '../App';
import MainPage from '../pages/MainPage';
import DataTypes from '../pages/DataTypesPage';
import GenericsPage from '../pages/GenericsPage';
import RecordPage from '../pages/RecordPage';
import AsConstPage from '../pages/AsConstTypeAssertionPage';
import ExtendsPage from '../pages/Extends';
import type { JSX } from 'react';

interface PathType {
  key: string;
  path: string;
  component: JSX.Element;
}

const routes: PathType[] = [
  {
    key: PathKeys.HOME,
    path: RoutePaths.HOME,
    component: <MainPage />,
  },
  {
    key: PathKeys.DATA_TYPES,
    path: RoutePaths.DATA_TYPES,
    component: <DataTypes />,
  },
  {
    key: PathKeys.GENERICS,
    path: RoutePaths.GENERICS,
    component: <GenericsPage />,
  },
  {
    key: PathKeys.RECORD,
    path: RoutePaths.RECORD,
    component: <RecordPage />,
  },
  {
    key: PathKeys.AS_CONST,
    path: RoutePaths.AS_CONST,
    component: <AsConstPage />,
  },
  {
    key: PathKeys.EXTENDS,
    path: RoutePaths.EXTENDS,
    component: <ExtendsPage />,
  },
];

const mappedRoutes = routes.map((item) => ({
  path: item.path,
  element: <App>{item.component}</App>,
}));

const browserRouter = createBrowserRouter(mappedRoutes, {
  basename: import.meta.env.BASE_URL,
});

export default browserRouter;
