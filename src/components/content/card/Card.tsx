// utils
import { formatBigNumbers } from '../../../utils/numberFormatter';

// styles
import './_card.scss';

type Props = {
  entriesDiffLast: number | undefined;
  sumTotal: number | undefined;
  entriesTitle: string;
  sumTitle: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className='card'>
      <div className='card-label'>{props.entriesTitle}</div>
      <div className='card-value'>
        {props.entriesDiffLast && formatBigNumbers(props.entriesDiffLast)}
      </div>
      <div className='card-label'>{props.sumTitle}</div>
      <div className='card-value'>
        {props.sumTotal && formatBigNumbers(props.sumTotal)}
      </div>
    </div>
  );
};

export default Card;
