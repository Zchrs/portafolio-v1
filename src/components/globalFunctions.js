export const getImageUrl = (name) => {
  return new URL(`/src/assets/img/${name}.svg`, import.meta.url).href;
};

export const getFile = (route, url, extension = 'svg') => {
  return new URL(
    `/src/assets/${route}/${url}.${extension}`,
    import.meta.url
  ).href;
}