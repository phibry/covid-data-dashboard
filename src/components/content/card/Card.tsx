// utils
import { formatBigNumbers } from '../../../utils/numberFormatter';

// types
import { openDataSwissCovidData } from '../../../utils/types/covidOpenDataSwissTypes';

// component
import Area from '../d3/Area';

// styles
import './_card.scss';

type Props = {
  entriesDiffLast: number | undefined;
  sumTotal: number | undefined;
  entriesTitle: string;
  sumTitle: string;
  areaChartData: Array<openDataSwissCovidData>;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className='card'>
      <div className='card-text-container'>
        <div className='card-label'>{props.entriesTitle}</div>
        <div className='card-value'>
          {props.entriesDiffLast && formatBigNumbers(props.entriesDiffLast)}
        </div>
        <div className='card-label'>{props.sumTitle}</div>
        <div className='card-value'>
          {props.sumTotal && formatBigNumbers(props.sumTotal)}
        </div>
      </div>

      <div className='card-chart-container'>
        <Area data={props.areaChartData} />
      </div>
    </div>
  );
};

export default Card;
