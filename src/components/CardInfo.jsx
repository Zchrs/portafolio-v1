const getImageUrl = (name) => {
  return new URL(`/src/assets/img/${name}.svg`, import.meta.url).href;
};

const techsCard = [
  {
    title0: "html",
    img: "html5-logo",
    title: `Experience since 2019`,
    text: "Read more...",
    icon: "experience",
  },
  {
    title0: "Css3",
    img: "css3-logo",
    title: `Experience since 2019`,
    text: "Read more...",
    icon: "experience",
  },
  {
    title0: "JS",
    img: "javascript-logo",
    title: `Experience since 2019`,
    text: "Read more...",
    icon: "experience",
  },
  {
    title0: "React",
    img: "react",
    title: `Experience since 2019`,
    text: "Read more...",
    icon: "experience",
  },
  {
    title0: "VueJS",
    img: "vuejs-logo",
    title: `Experience since 2019`,
    text: "Read more...",
    icon: "experience",
  },
  {
    title0: "sass",
    img: "sass-logo",
    title: `Experience since 2019`,
    text: "Read more...",
    icon: "experience",
  },
];

const CardInfo = ({ title, text, icon }) => {
  return (
    <div key={techsCard.title} className="info">
      <div className="info__content">
        <div className="info__shape"></div>
        <h3>{title}</h3>
        <img src={icon} alt="" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export { techsCard, CardInfo, getImageUrl };
