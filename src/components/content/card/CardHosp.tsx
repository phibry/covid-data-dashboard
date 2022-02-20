import { useContext } from 'react';

// utils
import { formatBigNumbers } from '../../../utils/numberFormatter';

// context
import OpenDataSwissContext from '../../../context/openDataSwiss/OpenDataSwissContext';

// icons
import { RiHospitalLine } from 'react-icons/ri';

// components
import CardElement from './CardElement';
import StackedBar from '../d3/StackedBar';

// styles
import './_card.scss';

type Data = {
  label: string;
  value: number;
};

const CardHosp = () => {
  const { totals, covidHosp } = useContext(OpenDataSwissContext);

  if (totals && covidHosp) {
    const hosp: Array<Data> = [
      {
        label: 'Covid patients',
        value: totals.currentHospCapacity.Total_Covid19Patients,
      },
      {
        label: 'Non-covid patients',
        value: totals.currentHospCapacity.Total_NonCovid19Patients,
      },
      {
        label: 'Free capacity',
        value: totals.currentHospCapacity.Total_FreeCapacity,
      },
    ];
    const hospICU: Array<Data> = [
      {
        label: 'ICU covid patients',
        value: totals.currentHospCapacity.ICU_Covid19Patients,
      },
      {
        label: 'ICU non-covid patients',
        value: totals.currentHospCapacity.ICU_NonCovid19Patients,
      },
      {
        label: 'ICU free capacity',
        value: totals.currentHospCapacity.ICU_FreeCapacity,
      },
    ];

    return (
      <div className='card hosp'>
        <div className='card-head'>
          <div className='card-title'>
            {<RiHospitalLine />} <span>Hospitalisations</span>
          </div>
        </div>
        <CardElement
          cardElementTitle={'New hospitalisations'}
          value={formatBigNumbers(totals.currentHosp.entries_diff_last)}
        />
        <CardElement
          cardElementTitle={'Total hospitalisations'}
          value={formatBigNumbers(totals.currentHosp.sumTotal)}
        />
        <br />
        <div className='card-flex-container'>
          <div className='card-flex-element'>
            <CardElement
              cardElementTitle={'Covid patients'}
              value={formatBigNumbers(
                totals.currentHospCapacity.Total_Covid19Patients
              )}
              percentage={
                totals.currentHospCapacity.TotalPercent_Covid19Patients
              }
              badgeColor={'green-1'}
            />

            <CardElement
              cardElementTitle={'Non-covid patients'}
              value={formatBigNumbers(
                totals.currentHospCapacity.Total_NonCovid19Patients
              )}
              percentage={
                totals.currentHospCapacity.TotalPercent_NonCovid19Patients
              }
              badgeColor={'green-3'}
            />

            <CardElement
              cardElementTitle={'Free capacity'}
              value={formatBigNumbers(
                totals.currentHospCapacity.Total_FreeCapacity
              )}
              percentage={totals.currentHospCapacity.TotalPercent_FreeCapacity}
              badgeColor={'green-5'}
            />

            <StackedBar
              colors={['#434e3a', '#657754', '#91aa7c']}
              data={hosp}
            />
          </div>

          <div className='card-flex-element'>
            <CardElement
              cardElementTitle={'ICU covid patients'}
              value={formatBigNumbers(
                totals.currentHospCapacity.ICU_Covid19Patients
              )}
              percentage={totals.currentHospCapacity.ICUPercent_Covid19Patients}
              badgeColor={'orange-1'}
            />
            <CardElement
              cardElementTitle={'ICU non-covid patients'}
              value={formatBigNumbers(
                totals.currentHospCapacity.ICU_NonCovid19Patients
              )}
              percentage={
                totals.currentHospCapacity.ICUPercent_NonCovid19Patients
              }
              badgeColor={'orange-3'}
            />
            <CardElement
              cardElementTitle={'ICU free capacity'}
              value={formatBigNumbers(
                totals.currentHospCapacity.ICU_FreeCapacity
              )}
              percentage={totals.currentHospCapacity.ICUPercent_FreeCapacity}
              badgeColor={'orange-5'}
            />
            <StackedBar
              colors={['#734A3E', '#bd7a65', '#e9a48f']}
              data={hospICU}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>NO DATA</div>;
  }
};
export default CardHosp;
