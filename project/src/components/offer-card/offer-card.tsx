import { Offer } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import OfferCardInfo from '../offer-card-info/offer-card-info';
import cn from 'classnames';
import { offerCardImage } from '../../const';

type OfferCardProps = {
  offer: Offer;
  classNameArticle: string;
  classNameWrapper: string;
  setSelectedOffer: (id: string) => void;
}

function OfferCard({ offer, classNameArticle, classNameWrapper, setSelectedOffer }: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    isPremium,
    photos,
  } = offer;

  const onMouseEnter = () => {
    setSelectedOffer(id);
  };

  return (
    <article className={cn('place-card', classNameArticle)} onMouseEnter={onMouseEnter}>
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
