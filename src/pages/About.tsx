const About = () => {
  return (
    <div className='container'>
      <h1 className='title-big'>
        About this Covid19 data visualisation application
      </h1>
      <section className='card-container'>
        <div className='card'>
          <div className='card-content-wrapper'>
            <h2 className='card-title'>Data</h2>
            <p className='card-text'>
              This application visualises data for the Covid19 pandemic. The
              data is provided by opendata.swiss. This is a Swiss public
              administration that serves as a central portal to provide
              government data.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-content-wrapper'>
            <h2 className='card-title'>Hello</h2>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              sunt sequi in quis. Minus vitae reiciendis, est expedita fuga
              laborum?
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-content-wrapper'>
            <h2 className='card-title'>Hola</h2>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad
              reprehenderit temporibus sed, velit laudantium commodi dolorem
              dignissimos veritatis cupiditate odit, aliquid vitae officia
              sapiente animi? Voluptatibus quaerat, itaque quas necessitatibus
              fugiat aspernatur quae dolor, saepe aliquam dolores, rem
              voluptatem.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-content-wrapper'>
            <h2 className='card-title'>Lorem ipsum dolor sit amet.</h2>
            <p className='card-text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque corrupti itaque reprehenderit, hic animi sint? Dolor
              adipisci hic temporibus! Error eius, repudiandae porro sed vitae
              eos ipsum rem animi quam.
            </p>
          </div>
        </div>
      </section>

      <p className='card-text'></p>
      {/* <img
        className='card-img'
        src='/assets/img/openswissdata-logo.png'
        alt='openswiss.data logo'
      /> */}
    </div>
  );
};

export default About;
