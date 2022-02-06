import { useContext } from 'react';
import OpenDataSwissContext from '../context/openDataSwiss/OpenDataSwissContext';

const Home = () => {
  const { covidContext } = useContext(OpenDataSwissContext);
  // const data = search();

  return (
    <>
      <h1 className='title-medium'>Home</h1>
      <p>{covidContext?.dataVersion}</p>
      <p>{covidContext?.sourceDate}</p>
    </>
  );
};

export default Home;
