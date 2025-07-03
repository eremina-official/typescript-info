interface RoutePathsType {
  [key: string]: string;
}

export const RoutePaths: RoutePathsType = {
  HOME: '/',
  DATA_TYPES: '/data-types',
  GENERICS: '/generics',
} as const;

export default RoutePaths;
