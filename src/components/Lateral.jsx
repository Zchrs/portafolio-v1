import { CardInfo, techsCard } from "./CardInfo";
import { getImageUrl } from "./globalFunctions";
import "../css/technologies.scss";

export const Lateral = ({ text, icon, title }) => {
  return (
    <div className="technologies">
      <h2> My stack</h2>
      <div className="technologies__container">
        {techsCard.map((tech) => (
          <div key={tech.title0} className="technologies__card">
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
