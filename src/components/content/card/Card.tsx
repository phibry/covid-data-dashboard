import { IconBaseProps } from 'react-icons';

// utils
import { formatBigNumbers } from '../../../utils/numberFormatter';

// types
import { openDataSwissCovidData } from '../../../utils/types/covidOpenDataSwissTypes';

// component
import Area from '../d3/Area';
import CardElement from './CardElement';

// styles
import './_card.scss';

type Props = {
  icon: IconBaseProps;
  cardTitle: string;
  class: string;

  entriesDiffLast: number | undefined;
  sumTotal: number | undefined;
  entriesTitle: string;
  sumTitle: string;
  areaChartData: Array<openDataSwissCovidData>;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className={`card ${props.class}`}>
      <div className='card-text-container'>
        <div className='card-head'>
          <div className='card-title'>
            {props.icon} <span>{props.cardTitle}</span>
          </div>
        </div>

        <CardElement
          cardElementTitle={props.entriesTitle}
          value={
            props.entriesDiffLast && formatBigNumbers(props.entriesDiffLast)
          }
        />

        <CardElement
          cardElementTitle={props.sumTitle}
          value={props.sumTotal && formatBigNumbers(props.sumTotal)}
        />
      </div>

      <div className='card-chart-container'>
        <Area data={props.areaChartData} />
      </div>
    </div>
  );
};

export default Card;
