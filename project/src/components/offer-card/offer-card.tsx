import { Offer } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import PlaceCardInfo from '../place-card-info/place-card-info';

type OfferCardProps = {
  offer: Offer;
}

function OfferCard({ offer }: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    isPremium,
    type,
    photos,
  } = offer;

  return (
    <article key={id} className='cities__card place-card'>
      {isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link
          to={`offer/${id}`}
          title={title}
        >
          <img
            className='place-card__image'
            src={photos[0].src}
            width='260'
            height='200'
            alt={type}
          />
        </Link>
      </div>
      <PlaceCardInfo offer={offer} />
    </article>
  );
}

export default OfferCard;
