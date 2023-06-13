
import { getFile } from "../../components/globalFunctions";
export const AboutScreen = () => {
  return (
    <section className="about animations">
        <h1 className="about__h1">About me</h1>
      <div className="about-container">
        <div className="about-img">
          <img src={getFile('img', `mia`, 'png')} alt="" />
        </div>

        <p className="about__p">
          In addition to my skills as a fullstack developer, I also have
          extensive knowledge in graphic design, operating systems, hardware
          maintenance, marketing and neuromarketing. I am a person with high
          commitment, determination and enthusiasm at work. Personal skills such
          as listening, good memory, creativity and teamwork. Easy to acquire
          new knowledge and attitude of constant learning.
        </p>

        <div className="about-cards">
          <div>
            <h2 className="">Experience as developer</h2>
            <img src={getFile('img', `experience`, 'png')} alt="" />
            <p className="p">1 year working</p>
          </div>
          <div>
            <h2>Team work</h2>
            <img src={getFile('img', `team`, 'png')} alt="" />
            <p className="p">Ability to work in teams</p>
          </div>
        </div>
        <div className="about-btns">
          <a href="" download>
            <button>Download CV english</button>
          </a>
          <a href="" download>
            <button>Download CV spanish</button>
          </a>
        </div>
      </div>
    </section>
  );
};
