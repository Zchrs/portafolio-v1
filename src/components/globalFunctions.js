import axios from "axios";


export const getImageUrl = (name) => {
  return new URL(`/src/assets/img/${name}.svg`, import.meta.url).href;
};


 export const getFile = (route, url, extension = 'svg') => {
  return new URL(
    `/src/assets/${route}/${url}.${extension}`,
    import.meta.url
  ).href;
}

export const devApi = () => {
  const request = axios.get('http://localhost:4000')
}

window.getFile = getFile;
window.getImageUrl = getImageUrl;
window.dedevApi = devApi;