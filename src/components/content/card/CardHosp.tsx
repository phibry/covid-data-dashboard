import { useContext } from 'react';

// utils
import { formatBigNumbers } from '../../../utils/numberFormatter';

// context
import OpenDataSwissContext from '../../../context/openDataSwiss/OpenDataSwissContext';

// icons
import { RiHospitalLine } from 'react-icons/ri';

// styles
import './_card.scss';

const CardHosp = () => {
  const { totals, covidHosp } = useContext(OpenDataSwissContext);

  if (totals && covidHosp) {
    return (
      <div className='card hosp'>
        <div className='card-head'>
          <div className='card-title'>
            {<RiHospitalLine />} <span>Hospitalisations</span>
          </div>
        </div>

        <div className='card-flex-container'>
          <div className='card-flex-element'>
            <div className='card-label'>New hospitalisations</div>
            <div className='card-value'>
              {totals.currentHosp.entries_diff_last &&
                formatBigNumbers(totals.currentHosp.entries_diff_last)}
            </div>
            <div className='card-label'>Total hospitalisations</div>
            <div className='card-value'>
              {totals.currentHosp.sumTotal &&
                formatBigNumbers(totals.currentHosp.sumTotal)}
            </div>
          </div>
          <div className='card-flex-element'>
            <div className='card-label'>Currently hospitalised'</div>
            <div className='card-value-flex'>
              {totals.currentHospCapacity.Total_Covid19Patients &&
                formatBigNumbers(
                  totals.currentHospCapacity.Total_Covid19Patients
                )}{' '}
              <span className='badge' data-tip data-for='inHosp'>
                {totals.currentHospCapacity.TotalPercent_Covid19Patients}%
              </span>
            </div>
            <div className='card-label'>Currently in the ICU</div>
            <div className='card-value-flex'>
              {totals.currentHospCapacity.ICU_Covid19Patients &&
                formatBigNumbers(
                  totals.currentHospCapacity.ICU_Covid19Patients
                )}{' '}
              <span className='badge' data-tip data-for='inICU'>
                {totals.currentHospCapacity.ICUPercent_Covid19Patients}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>NO DATA</div>;
  }
};

export default CardHosp;
