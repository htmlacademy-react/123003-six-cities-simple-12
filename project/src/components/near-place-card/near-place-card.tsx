import { Link } from 'react-router-dom';
import PlaceCardInfo from '../place-card-info/place-card-info';
import { Offer } from '../../mocks/offers';

type NearPlaceCardProps = {
  offer: Offer;
}

function NearPlaceCard({ offer }: NearPlaceCardProps): JSX.Element {

  return (
    <article className='near-places__card place-card' >
      <div className='near-places__image-wrapper place-card__image-wrapper'>
        <Link
          to='/'
          title='/'
        >
          <img
            className='place-card__image'
            src='img/room.jpg'
            width='260'
            height='200'
            alt='Place'
          />
        </Link>
      </div>
      <PlaceCardInfo offer={offer} />
    </article>
  );
}

export default NearPlaceCard;
