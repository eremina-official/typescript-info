interface RoutePathsType {
  [key: string]: string;
}

export const PathKeys: RoutePathsType = {
  HOME: 'HOME',
  DATA_TYPES: 'DATA_TYPES',
  GENERICS: 'GENERICS',
  RECORD: 'RECORD',
  AS_CONST: 'AS_CONST',
  EXTENDS: 'EXTENDS',
  OPERATORS: 'OPERATORS',
} as const;

export const RoutePaths: RoutePathsType = {
  HOME: '/',
  DATA_TYPES: '/data-types',
  GENERICS: '/generics',
  RECORD: '/record',
  AS_CONST: '/as-const',
  EXTENDS: '/extends',
  OPERATORS: '/operators',
} as const;

export default RoutePaths;
