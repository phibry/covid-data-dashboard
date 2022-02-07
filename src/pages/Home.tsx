import { useContext } from 'react';

import { getReadableTimeStamp } from '../utils/dateHelper';

// context
import OpenDataSwissContext from '../context/openDataSwiss/OpenDataSwissContext';

const Home = () => {
  const { covidContext, covidCases, covidHosp, loading } =
    useContext(OpenDataSwissContext);

  if (!loading) {
    if (covidContext && covidContext.sourceDate) {
      return (
        <>
          <h1 className='title-medium'>Home</h1>
          <p>Status: {getReadableTimeStamp(covidContext.sourceDate)}h</p>

          {/* <div className='card'>
            <div className='card-title'>Cases</div>
            <div className='card-current'>
              {covidCases[covidCases?.length - 1].entries_diff_last}
            </div>
            <div className='card-total'>
              {covidCases[covidCases?.length - 1].sumTotal}
            </div>
          </div> */}

          {/* <div className='card'>
            <div className='card-title'>Hospitalisation</div>
            <div className='card-current'>
              {covidHosp[covidHosp?.length - 1].entries_diff_last}
            </div>
            <div className='card-total'>
              {covidHosp[covidHosp?.length - 1].sumTotal}
            </div>
          </div> */}
        </>
      );
    } else {
      return <div>STILL LOADING</div>;
    }
  } else {
    return <div>LOADING</div>;
  }
};

export default Home;
