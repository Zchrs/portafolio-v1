import { Backend } from "../../contentBack/Backend";
import { Images } from "../../assets/img";
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
            <i>
              <img src={Images.linLogo} alt="" />
            </i>
            <i>
              <img src={Images.fbLogoGray} alt="" />
            </i>
            <i>IG</i>
            <i>TW</i>
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
