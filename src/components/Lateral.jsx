import "../css/technologies.scss";
import { CardInfo, techsCard, getImageUrl } from "./CardInfo";

export const Lateral = ({ text, icon }) => {
  return (
    <div className="technologies">
      <h2> My stack</h2>
      <div className="technologies__container">
        {techsCard.map((tech) => (
          <div key={tech.title} className="technologies__card">
            <img src={getImageUrl(tech.img)} alt="" />
            <CardInfo
              title={tech.title}
              text={tech.text}
              icon={getImageUrl(tech.icon)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
