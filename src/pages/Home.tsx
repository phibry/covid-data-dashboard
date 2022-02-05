import { currentData } from '../context/openzh/OpenZhActions';

const Home = () => {
  // const data = search();
  currentData();

  return (
    <>
      <h1 className='title-medium'>Home</h1>
      <p>hello</p>
    </>
  );
};

export default Home;
