import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

Link
export const PortfolioScreen = () => {
  return (
    <div className="portfolio animations">
      <h1 className="portfolio__h1">Portfolio</h1>
      <div className="portfolio__container">
        
          {cardPortfolio.map(({ title, text, link, img }) => (
            <div key={title} className="portfolio-card">
              <img loading="lazy" src={getFile('img', `${ img }`, `png`)} alt="" />
              <h2 className="portfolio-card__h2">{ title }</h2>
              <p className="portfolio-card__p">
                <ExternalLink href={ link }>
                  { text }
                </ExternalLink>
              </p>
            </div>
          ))}
        
      </div>
    </div>
  );
};

const cardPortfolio = [
  {
    title: "React app",
    text: "Corporación Corpodeco web App.",
    link: "https://corpodeco.com.co/",
    img: 'corpodeco'
  },
  {
    title: "Graphic design",
    text: "Corporación Corpodeco logo design.",
    link: "https://corpodeco.com.co/",
    img: 'logo-corpodeco'
  },
  {
    title: "React app",
    text: "Api rest for giphy api, exercise to Fernando Herrera course UDEMY.",
    link: "https://gift-expert-app-gustavo.netlify.app//",
    img: 'gif-expert-app'
  },
];
