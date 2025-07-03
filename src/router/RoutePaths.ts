interface RoutePathsType {
  [key: string]: string;
}

export const RoutePaths: RoutePathsType = {
  HOME: '/',
  DATA_TYPES: '/data-types',
} as const;

export default RoutePaths;
