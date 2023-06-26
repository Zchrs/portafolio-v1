
export const ServicesScreen = () => {
  return (
    <section className="services animations">
        <h1 className="services__h1">Services</h1>
      <div className="services__container">
        <div className="services-div">
        <img src={getFile('img', `pencil`, 'svg')} alt="" />
        <div>
          <h2>Front-end</h2>
          <p>From design to development implementation</p>
        </div>
      </div>
        <div className="services-div">
        <img src={getFile('img', `backend`, 'svg')} alt="" />
        <div>
          <h2>Back-end</h2>
          <p>From design to development implementation</p>
        </div>
      </div>
      <div className="services-div">
      <img src={getFile('img', `search`, 'svg')} alt="" />
        <div>
          <h2>Marketing</h2>
          <p>From design to development implementation</p>
        </div>
      </div>
      <div className="services-div">
      <img src={getFile('img', `majesticons_speakerphone-line`, 'svg')} alt="" />
        <div>
          <h2>Research</h2>
          <p>From design to development implementation</p>
        </div>
      </div>
      <div className="services-div">
      <img src={getFile('img', `ic_outline-web-asset`, 'svg')} alt="" />
        <div>
          <h2>Web Design</h2>
          <p>From design to development implementation</p>
        </div>
      </div>
      <div className="services-div">
      <img src={getFile('img', `neuro-m`, 'png')} alt="" />
        <div>
          <h2>Neuromarketing</h2>
          <p>From design to development implementation</p>
        </div>
      </div>
      </div>
    </section>
  );
};
