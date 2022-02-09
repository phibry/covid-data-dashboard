// styles
import './_card.scss';

type Props = {
  title: string;
  entries_diff_last: number | undefined;
  sumTotal: number | undefined;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className='card'>
      <div className='card-title'>{props.title}</div>
      <div className='card-current'>{props.entries_diff_last}</div>
      <div className='card-total'>{props.sumTotal}</div>
    </div>
  );
};

export default Card;
