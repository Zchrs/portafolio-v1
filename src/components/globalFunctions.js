export const getImageUrl = (name) => {
  return new URL(`/src/assets/img/${name}.svg`, import.meta.url).href;
};
