import { Offer } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import OfferCardInfo from '../offer-card-info/offer-card-info';
//import cn from 'classnames';
import { offerCardImage } from '../../const';

type OfferCardProps = {
  offer: Offer;
}

function OfferCard({ offer }: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    isPremium,
    photos,
  } = offer;

  return (
    //near-places__card
    //near-places__image-wrapper
    <article className='place-card place-card__cities'>
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
            width={offerCardImage.WIDTH}
            height={offerCardImage.HEIGHT}
            alt={title}
          />
        </Link>
      </div>
      <OfferCardInfo offer={offer} />
    </article >
  );
}

export default OfferCard;
