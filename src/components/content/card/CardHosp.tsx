import ReactTooltip from 'react-tooltip';

// styles
import './_card.scss';

type Props = {
  entriesTitle: string;
  sumTitle: string;
  entriesDiffLast: number | undefined;
  sumTotal: number | undefined;

  inHospTitle: string;
  inHosp: number | undefined;
  inHospPercent: number | undefined;

  ICUTitle: string;
  ICU: number | undefined;
  ICUPercent: number | undefined;
};

const CardHosp: React.FC<Props> = (props) => {
  return (
    <div className='card hosp'>
      <div className='card-flex-container'>
        <div className='card-flex-element'>
          <div className='card-label'>{props.entriesTitle}</div>
          <div className='card-value'>{props.entriesDiffLast}</div>
          <div className='card-label'>{props.sumTitle}</div>
          <div className='card-value'>{props.sumTotal}</div>
        </div>
        <div className='card-flex-element'>
          <div className='card-label'>{props.inHospTitle}</div>
          <div className='card-value-flex'>
            {props.inHosp}{' '}
            <span className='badge' data-tip data-for='inHosp'>
              {props.inHospPercent}%
            </span>
            <ReactTooltip id='inHosp' type='dark' effect='solid'>
              <p>The percentage of hospital</p>
              <p>hospital capacity that is</p>
              <p>occupied by Covid patients.</p>
              <br />
            </ReactTooltip>
          </div>
          <div className='card-label'>{props.ICUTitle}</div>
          <div className='card-value-flex'>
            {props.ICU}{' '}
            <span className='badge' data-tip data-for='inICU'>
              {props.ICUPercent}%
            </span>
            <ReactTooltip id='inICU' type='dark' effect='solid'>
              <p>The percentage of ICU </p>
              <p>beds occupied by Covid patients.</p>
              <br />
            </ReactTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHosp;
