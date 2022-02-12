import './_spinner.scss';

const SpinnerDots = () => {
  return (
    <div className='spinner-container'>
      <div className='circle'></div>
      <div className='circle aurora-2'></div>
      <div className='circle frost-4'></div>
      <div className='circle aurora-5'></div>
      <div className='circle aurora-4'></div>
    </div>
  );
};

export default SpinnerDots;
