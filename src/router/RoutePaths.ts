interface RoutePaths {
  [key: string]: string;
}

export const RoutePaths = {
  HOME: '/',
  DATA_TYPES: '/data-types',
} as const;

export default RoutePaths;
