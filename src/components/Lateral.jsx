import { CardInfo, techsCard } from "./CardInfo";
import { Link } from "react-router-dom";
import { getFile } from "./globalFunctions";
import "../css/technologies.scss";

export const Lateral = ({ text, icon, title }) => {
  return (
    <div className="technologies">
      <h2> My stack</h2>
      <div className="technologies__container">
        {techsCard.map(({img, icon, title, title0, text, }) => (
          <div key={title0} className="technologies__card">
            <img src={getFile('img', `${img}`, 'svg')} alt="" />
            <CardInfo
              title={title}
              text={text}
              icon={icon}
            />
          </div>
        ))}
      </div>
      <Link to={'skills'} className="technologies__link">More</Link>
    </div>
  );
};
