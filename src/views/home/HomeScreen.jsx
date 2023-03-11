import { Link } from "react-router-dom";
import { Backend, images } from "../../contentBack/Backend";
import { Images } from "../../assets/img";
import { getImageUrl } from "../../components/globalFunctions";
import "../../css/globals.scss";

export const HomeScreen = () => {
  return (
    <section className="home">
      <article className="home__container">
        <div className="home__image">
          <img src={Images.mia} alt="" />
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
            <button className="btn-home">
              {Backend.textButtonsHome.contactMeBtn}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
