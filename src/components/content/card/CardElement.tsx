type Props = {
  cardElementTitle: string;
  value: string | number | undefined;
  percentage?: number;
  badgeColor?: string;
};

const CardElement: React.FC<Props> = (props) => {
  if (props.percentage && props.badgeColor) {
    return (
      <>
        <div className='card-label'>{props.cardElementTitle}</div>
        <div className='card-value-flex'>
          {props.value}{' '}
          <span className={`badge ${props.badgeColor}`}>
            {props.percentage}%
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='card-label'>{props.cardElementTitle}</div>
        <div className='card-value-flex'>{props.value}</div>
      </>
    );
  }
};

export default CardElement;
