import { useContext } from 'react';

// constants
import { VACCINATIONS } from '../../../utils/constants/title';

// icons
import { RiSyringeLine } from 'react-icons/ri';

// context
import OpenDataSwissContext from '../../../context/openDataSwiss/OpenDataSwissContext';

type Data = {
  label: string;
  value: number;
};

const CardVacc = () => {
  const { totals, covidHosp } = useContext(OpenDataSwissContext);

  return (
    <div className='card vacc'>
      <div className='card-text-container'>
        <div className='card-head'>
          <div className='card-title'>
            <RiSyringeLine /> <span>{VACCINATIONS}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVacc;
