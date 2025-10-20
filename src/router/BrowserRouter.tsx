import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';
import RoutePaths, { PathKeys } from './RoutePaths';
import App from '../App';
import { LazyPageWrapper } from '../components/LazyPageComponents';

// Eagerly load the main page for immediate rendering
import MainPage from '../pages/MainPage';

// Lazy load secondary pages
const DataTypes = lazy(() => import('../pages/DataTypesPage'));
const GenericsPage = lazy(() => import('../pages/GenericsPage'));
const RecordPage = lazy(() => import('../pages/RecordPage'));
const AsConstPage = lazy(() => import('../pages/AsConstTypeAssertionPage'));
const ExtendsPage = lazy(() => import('../pages/Extends'));

interface RouteConfig {
  key: string;
  path: string;
  Component: React.ComponentType;
}

const routes: RouteConfig[] = [
  {
    key: PathKeys.HOME,
    path: RoutePaths.HOME,
    Component: MainPage,
  },
  {
    key: PathKeys.DATA_TYPES,
    path: RoutePaths.DATA_TYPES,
    Component: DataTypes,
  },
  {
    key: PathKeys.GENERICS,
    path: RoutePaths.GENERICS,
    Component: GenericsPage,
  },
  {
    key: PathKeys.RECORD,
    path: RoutePaths.RECORD,
    Component: RecordPage,
  },
  {
    key: PathKeys.AS_CONST,
    path: RoutePaths.AS_CONST,
    Component: AsConstPage,
  },
  {
    key: PathKeys.EXTENDS,
    path: RoutePaths.EXTENDS,
    Component: ExtendsPage,
  },
];

const mappedRoutes = routes.map((route) => ({
  path: route.path,
  element: (
    <App>
      {route.key === PathKeys.HOME ? <MainPage /> : <LazyPageWrapper Component={route.Component} />}
    </App>
  ),
}));

const browserRouter = createBrowserRouter(mappedRoutes, {
  basename: import.meta.env.BASE_URL,
});

export default browserRouter;
