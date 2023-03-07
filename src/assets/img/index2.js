function getImageUrl(name) {
  return new URL(`/src/assets/img/${name}.svg`, import.meta.url).href;
}

const techsCard = [
  {
    title: "html",
    img: "html5-logo",
  },
];
