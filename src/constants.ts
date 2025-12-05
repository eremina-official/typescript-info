// base url for github pages deployment
export const basePath = '/typescript-info';

import RoutePaths from './router/RoutePaths';

export const menuItems: { label: string; path: string }[] = [
  { label: 'Overview', path: RoutePaths.HOME },
  { label: 'Data types', path: RoutePaths.DATA_TYPES },
  { label: 'Generics', path: RoutePaths.GENERICS },
  { label: 'Record', path: RoutePaths.RECORD },
  { label: 'as const', path: RoutePaths.AS_CONST },
  { label: 'Extends', path: RoutePaths.EXTENDS },
];
