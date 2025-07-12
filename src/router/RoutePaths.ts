interface RoutePathsType {
  [key: string]: string;
}

export const RoutePaths: RoutePathsType = {
  HOME: '/',
  DATA_TYPES: '/data-types',
  GENERICS: '/generics',
  RECORD: '/record',
  AS_CONST: '/as-const',
} as const;

export type RouteKey = keyof typeof RoutePaths;
export type RoutePath = (typeof RoutePaths)[RouteKey];

export default RoutePaths;
