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
const OperatorsPage = lazy(() => import('../pages/OperatorsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const browserRouter = createBrowserRouter(
  [
    {
      path: RoutePaths.HOME,
      element: <App />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: RoutePaths.DATA_TYPES,
          element: <LazyPageWrapper Component={DataTypes} />,
        },
        {
          path: RoutePaths.GENERICS,
          element: <LazyPageWrapper Component={GenericsPage} />,
        },
        {
          path: RoutePaths.RECORD,
          element: <LazyPageWrapper Component={RecordPage} />,
        },
        {
          path: RoutePaths.AS_CONST,
          element: <LazyPageWrapper Component={AsConstPage} />,
        },
        {
          path: RoutePaths.EXTENDS,
          element: <LazyPageWrapper Component={ExtendsPage} />,
        },
        {
          path: RoutePaths.OPERATORS,
          element: <LazyPageWrapper Component={OperatorsPage} />,
        },
        {
          path: '*',
          element: <LazyPageWrapper Component={NotFoundPage} />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default browserRouter;
