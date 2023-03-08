const getImageUrl = (name) => {
  return new URL(`/src/assets/img/${name}.svg`, import.meta.url).href;
};

const techsCard = [
  {
    title: "html",
    img: "html5-logo",
    text: `Experience since 2019`,
  },
  {
    title: "Css3",
    img: "css3-logo",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        corporis, quas similique, quasi ipsum commodi reiciendis sunt facere
        veniam, quia laborum? Voluptas ducimus nemo laborum neque fugiat
        veritatis expedita at?`,
  },
  {
    title: "JS",
    img: "javascript-logo",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        corporis, quas similique, quasi ipsum commodi reiciendis sunt facere
        veniam, quia laborum? Voluptas ducimus nemo laborum neque fugiat
        veritatis expedita at?`,
  },
  {
    title: "React",
    img: "react",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        corporis, quas similique, quasi ipsum commodi reiciendis sunt facere
        veniam, quia laborum? Voluptas ducimus nemo laborum neque fugiat
        veritatis expedita at?`,
  },
  {
    title: "VueJS",
    img: "vuejs-logo",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        corporis, quas similique, quasi ipsum commodi reiciendis sunt facere
        veniam, quia laborum? Voluptas ducimus nemo laborum neque fugiat
        veritatis expedita at?`,
  },
  {
    title: "sass",
    img: "sass-logo",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        corporis, quas similique, quasi ipsum commodi reiciendis sunt facere
        veniam, quia laborum? Voluptas ducimus nemo laborum neque fugiat
        veritatis expedita at?`,
  },
];

const CardInfo = ({ text }) => {
  return (
    <div key={techsCard.title} className="info">
      <div className="info__content">
        <div className="info__shape"></div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export { techsCard, CardInfo, getImageUrl };
