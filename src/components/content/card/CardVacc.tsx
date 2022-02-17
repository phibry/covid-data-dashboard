import { VACCINATIONS } from '../../../utils/constants/title';

// icons
import { RiSyringeLine } from 'react-icons/ri';

const CardVacc = () => {
  return (
    <div className='card vacc'>
      <div className='card-text-container'>
        <div className='card-head'>
          <div className='card-title'>
            <RiSyringeLine /> <span>{VACCINATIONS}</span>
          </div>
        </div>

        <div className='card-label'>sadf</div>
        <div className='card-value'>123123</div>
        <div className='card-label'>fasdfasdf</div>
        <div className='card-value'>2342134</div>
      </div>

      <div className='card-chart-container'>chart</div>
    </div>
  );
};

export default CardVacc;
