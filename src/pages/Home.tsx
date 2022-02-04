import { currentData } from '../context/opendataswiss/OpenDataActions';

const Home = () => {
  // const data = search();
  // console.log(data);
  currentData();

  return (
    <>
      <h1 className='title-medium'>Home</h1>
      <p>hello</p>
    </>
  );
};

export default Home;
