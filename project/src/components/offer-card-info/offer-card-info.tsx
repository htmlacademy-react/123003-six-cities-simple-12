import { Link } from 'react-router-dom';
import { Offer } from '../../mocks/offers';
import { RoomTypeToLabel, RATING_COEFFICIENT } from '../../const';

type OfferCardInfoProps = {
  offer: Offer;
}

function OfferCardInfo({ offer }: OfferCardInfoProps): JSX.Element {
  const {
    price,
    rating,
    id,
    type,
    title,
  } = offer;

  return (
    <div className='place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro;{price}</b>
          <span className='place-card__price-text'>
            &#47;&nbsp;night
          </span>
        </div>
      </div>
      <div className='place-card__rating rating'>
        <div className='place-card__stars rating__stars'>
          <span style={{ width: `${rating * RATING_COEFFICIENT}% ` }}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <h2 className='place-card__name'>
        <Link
          to={`offer/${id}`}
          title={title}
        >
          {title}
        </Link>
      </h2>
      <p className='place-card__type'>
        {RoomTypeToLabel[type]}
      </p>
    </div>
  );
}

export default OfferCardInfo;
