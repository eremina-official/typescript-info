interface RoutePathsType {
  [key: string]: string;
}

export const PathKeys: RoutePathsType = {
  HOME: 'HOME',
  DATA_TYPES: 'DATA_TYPES',
  GENERICS: 'GENERICS',
  RECORD: 'RECORD',
  AS_CONST: 'AS_CONST',
} as const;

export const RoutePaths: RoutePathsType = {
  HOME: '/',
  DATA_TYPES: '/data-types',
  GENERICS: '/generics',
  RECORD: '/record',
  AS_CONST: '/as-const',
} as const;

export default RoutePaths;
