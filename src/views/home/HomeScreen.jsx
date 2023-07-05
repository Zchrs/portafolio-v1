import { Link } from "react-router-dom";
import { Backend, images } from "../../contentBack/Backend";
import { TypeWriter } from "../../components/TypeWriter";
import "../../css/globals.scss";

export const HomeScreen = () => {
  return (
    <section className="home animations">
      <article className="home__container">
      <div className="home__message">
        <h2 className="home__h2">
          ¿Are you recruiter?
        </h2>
        
          <TypeWriter
            text="Send me a message and receive preset access credentials to log in or register to test all the functionality of my app."
          />
       
      </div>
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
