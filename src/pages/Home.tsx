import { useContext } from 'react';

// utils
import { getReadableTimeStamp } from '../utils/dateHelper';

// components
import Card from '../components/content/card/Card';
import CardHosp from '../components/content/card/CardHosp';
import CardVacc from '../components/content/card/CardVacc';
import SpinnerDots from '../components/layout/loader/SpinnerDots';

// context
import OpenDataSwissContext from '../context/openDataSwiss/OpenDataSwissContext';

// icons
import { RiVirusLine, RiSkullLine } from 'react-icons/ri';

const Home = () => {
  const { covidContext, totals, loading, covidCases, covidHosp, covidDeaths } =
    useContext(OpenDataSwissContext);

  if (
    !loading &&
    covidContext &&
    covidContext.sourceDate &&
    covidCases &&
    covidHosp &&
    covidDeaths
  ) {
    return (
      <div className='container'>
        <div className='title-container'>
          <h1 className='title-big pt-dyn'>Dashboard</h1>
          <span className='title-status'>
            Status - {getReadableTimeStamp(covidContext.sourceDate)}h
          </span>
          <span className='title-source'>
            Source - Federal Office of Publc Health FOPH - BAG
          </span>
        </div>

        <div className='grid-container pt-2'>
          <Card
            icon={<RiVirusLine />}
            cardTitle={'Cases'}
            entriesTitle={'New cases'}
            class={'cases'}
            sumTitle={'Total cases'}
            entriesDiffLast={totals?.currentCase?.entries_diff_last}
            sumTotal={totals?.currentCase?.sumTotal}
            areaChartData={covidCases}
          />

          <Card
            icon={<RiSkullLine />}
            cardTitle={'Deaths'}
            class={'deaths'}
            entriesTitle={'Deaths with the involvement of Covid19'}
            sumTitle={'Total deaths'}
            entriesDiffLast={totals?.currentDeaths?.entries_diff_last}
            sumTotal={totals?.currentDeaths?.sumTotal}
            areaChartData={covidDeaths}
          />

          <CardHosp />
          <CardVacc />
        </div>
      </div>
    );
  } else {
    return <SpinnerDots />;
  }
};

export default Home;
