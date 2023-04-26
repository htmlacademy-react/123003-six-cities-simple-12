import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import OfferCardInfo from '../offer-card-info/offer-card-info';
import cn from 'classnames';
import { offerCardImage } from '../../const';
import { useAppDispatch } from '../../hooks/index';
import { useParams } from 'react-router-dom';
import { fetchReviewAction } from '../../store/api-actions';

type OfferCardProps = {
  offer: Offer;
  classNameArticle: string;
  classNameWrapper: string;
  setSelectedOffer: (id: string) => void;
}

function OfferCard({ offer, classNameArticle, classNameWrapper, setSelectedOffer }: OfferCardProps): JSX.Element {
  const offerId = Number(useParams().id);
  const dispatch = useAppDispatch();
  const {
    id,
    title,
    isPremium,
    previewImage,
  } = offer;

  const onMouseEnter = () => {
    setSelectedOffer(id);
  };

  const onClick = () => {
    dispatch(fetchReviewAction(offerId));
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
          onClick={onClick}
        >
          <img
            className='place-card__image'
            src={previewImage}
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
