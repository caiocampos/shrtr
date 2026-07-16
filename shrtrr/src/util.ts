export const route = (path: string) =>
  `${import.meta.env.BASE_URL}${path}`.replaceAll("//", "/")

export const errorRoute = '/err/error';
export const baseRoute = '/';
