import { useContext } from 'react';

// utils
import { getReadableTimeStamp } from '../utils/dateHelper';

// components
import Card from '../components/content/card/Card';

// context
import OpenDataSwissContext from '../context/openDataSwiss/OpenDataSwissContext';

const Home = () => {
  const { covidContext, totals, loading } = useContext(OpenDataSwissContext);

  if (!loading && covidContext && covidContext.sourceDate) {
    return (
      <>
        <h1 className='title-medium'>Home</h1>
        <p>Status: {getReadableTimeStamp(covidContext.sourceDate)}h</p>

        <Card
          title={'Cases'}
          entries_diff_last={totals?.currentCase?.entries_diff_last}
          sumTotal={totals?.currentCase?.sumTotal}
        />

        <Card
          title={'Hospitalisation'}
          entries_diff_last={totals?.currentHosp?.entries_diff_last}
          sumTotal={totals?.currentHosp?.sumTotal}
        />

        <Card
          title={'Deaths'}
          entries_diff_last={totals?.currentDeaths?.entries_diff_last}
          sumTotal={totals?.currentDeaths?.sumTotal}
        />
      </>
    );
  } else {
    return <div>LOADING</div>;
  }
};

export default Home;
