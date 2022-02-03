import { RiDatabase2Line, RiUser3Line, RiCodeLine } from 'react-icons/ri';

const About = () => {
  return (
    <div className='container'>
      <h1 className='title-big'>
        About this Covid19 data visualisation application
      </h1>
      <section className='card-container'>
        <div className='card'>
          <div className='card-content-wrapper'>
            <RiDatabase2Line />
            <h2 className='card-title'>Data</h2>
            <p className='card-text'>
              This application visualises data for the Covid19 pandemic. The
              data is provided by{' '}
              <a
                className='card-link-inline'
                href='https://opendata.swiss/en'
                target='_blank'
                rel='noopener noreferrer'
              >
                opendata.swiss
              </a>
              . This is a Swiss public administration that serves as a central
              portal to provide government data.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-content-wrapper'>
            <RiUser3Line />
            <h2 className='card-title'>Developer</h2>
            <p className='card-text'>
              Hi, my name is Philipp Bryan Rieser and I am a software engineer.
              I am interested in web development and data visualisation. This
              application combines both aspects.
            </p>

            <a
              className='card-link'
              href='https://www.linkedin.com/in/phibry'
              target='_blank'
              rel='noopener noreferrer'
            >
              To my LinkedIn
            </a>
          </div>
        </div>

        <div className='card'>
          <div className='card-content-wrapper'>
            <RiCodeLine />
            <h2 className='card-title'>Code</h2>
            <p className='card-text'>
              This application was created with React and Typescript. For the
              diagrams, d3js was used. The code can be seen on my{' '}
              <a
                className='card-link-inline color-2'
                href='https://github.com/phibry'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github profile
              </a>
              .
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
