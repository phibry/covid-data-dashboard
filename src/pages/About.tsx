import {
  RiDatabase2Line,
  RiUser3Line,
  RiCodeLine,
  RiMailLine,
} from 'react-icons/ri';
import { SiTypescript, SiReact, SiD3Dotjs } from 'react-icons/si';

const About = () => {
  return (
    <div className='container'>
      <div className='title-about-container'>
        <h1 className='title-big title-about pt-4'>About this application</h1>
      </div>
      <section className='card-container'>
        <div className='card-about'>
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

        <div className='card-about'>
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

        <div className='card-about'>
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
              . This is the first application I have developed using these
              technologies.
            </p>
          </div>
        </div>

        <div className='card-about'>
          <div className='card-content-wrapper'>
            <RiMailLine />
            <h2 className='card-title'>Hit me up!</h2>
            <p className='card-text'>
              Don't hesitate to ask me anything. If you have any feedback or
              suggestions, please contact me via email
            </p>

            <a className='card-link' href='mailto:philipp.rieser@gmail.com'>
              philipp.rieser@gmail.com
            </a>
          </div>
        </div>
      </section>

      <div className='img-container'>
        <img
          className='about-img'
          src='/assets/img/openswissdata-logo.png'
          alt='openswiss.data logo'
        />

        <div className='icon-container'>
          <span className='icon-react'>
            <SiReact />
          </span>
          <span className='icon-typescript'>
            <SiTypescript />
          </span>
          <span className='icon-d3js'>
            <SiD3Dotjs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
