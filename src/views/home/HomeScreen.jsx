import { Link } from "react-router-dom";
import { Backend, images } from "../../contentBack/Backend";
import { getFile, getImageUrl } from "../../components/globalFunctions";
import "../../css/globals.scss";

export const HomeScreen = () => {
  return (
    <section className="home animations">
      <article className="home__container">
        <div className="home__image">
        <img src={getFile('img', `mia`, 'png')} alt="" />
        </div>
        <div className="home__contain">
          <div>
            <h1>{Backend.home.title} </h1>
          </div>
          <div>
            <h2>{Backend.home.subTitle}</h2>
          </div>

          <div className="home__social">
            {images.map(({ title, url, img }) => (
              <div key={title} className="home__li">
                <Link to={url} target="_new">
                  <img src={getImageUrl(img)} alt="" />
                </Link>
              </div>
            ))}
          </div>
          <div className="home__btns">
            <Link to={"/contact"}>
              <button className="btn-home">
                {Backend.textButtonsHome.contactMeBtn}
              </button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
