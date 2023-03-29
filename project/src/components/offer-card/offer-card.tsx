import { Offer } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import OfferCardInfo from '../offer-card-info/offer-card-info';
import cn from 'classnames';
import { offerCardImage } from '../../const';

type OfferCardProps = {
  offer: Offer;
  className: string;
  classNameWrapper: string;
}

function OfferCard({ offer, className, classNameWrapper }: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    isPremium,
    photos,
  } = offer;

  return (
    //near-places__card
    //near-places__image-wrapper
    <article className={cn('place-card__cities', className)}>
      {isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>}
      <div className={cn('place-card__image-wrapper', classNameWrapper)}>
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
