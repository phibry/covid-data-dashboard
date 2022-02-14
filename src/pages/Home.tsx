import { useContext } from 'react';

// utils
import { getReadableTimeStamp } from '../utils/dateHelper';

// components$
import Area from '../components/content/d3/Area';
import Card from '../components/content/card/Card';
import CardHosp from '../components/content/card/CardHosp';
import SpinnerDots from '../components/layout/loader/SpinnerDots';

// context
import OpenDataSwissContext from '../context/openDataSwiss/OpenDataSwissContext';

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
          <h1 className='title-big pt-4'>Dashboard</h1>
          <span className='title-status'>
            Status - {getReadableTimeStamp(covidContext.sourceDate)}h
          </span>
          <span className='title-source'>
            Source - Federal Office of Publc Health FOPH - BAG
          </span>
        </div>

        <div className='grid-container pt-2'>
          <Card
            entriesTitle={'New cases'}
            sumTitle={'Total cases'}
            entriesDiffLast={totals?.currentCase?.entries_diff_last}
            sumTotal={totals?.currentCase?.sumTotal}
            areaChartData={covidCases}
          />

          <Card
            entriesTitle={'Deaths with the involvement of Covid19'}
            sumTitle={'Total deaths'}
            entriesDiffLast={totals?.currentDeaths?.entries_diff_last}
            sumTotal={totals?.currentDeaths?.sumTotal}
            areaChartData={covidDeaths}
          />

          <CardHosp
            entriesTitle={'New hospitalisations'}
            sumTitle={'Total hospitalisations'}
            entriesDiffLast={totals?.currentHosp?.entries_diff_last}
            sumTotal={totals?.currentHosp?.sumTotal}
            inHospTitle={'Currently hospitalised'}
            inHosp={totals?.currentHospCapacity?.Total_Covid19Patients}
            inHospPercent={
              totals?.currentHospCapacity?.TotalPercent_Covid19Patients
            }
            ICUTitle={'Currently in the ICU'}
            ICU={totals?.currentHospCapacity?.ICU_Covid19Patients}
            ICUPercent={totals?.currentHospCapacity?.ICUPercent_Covid19Patients}
          />
        </div>
      </div>
    );
  } else {
    return <SpinnerDots />;
  }
};

export default Home;
