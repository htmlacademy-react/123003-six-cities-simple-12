import { Link } from 'react-router-dom';
import PlaceCardInfo from '../place-card-info/place-card-info';

function PlaceCard(): JSX.Element {
  return (
    <article className='cities__card place-card'>
      <div className='place-card__mark'>
        <span>Premium</span>
      </div>
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link
          to='/offer'
          title='/offer'
        >
          <img
            className='place-card__image'
            src='img/apartment-01.jpg'
            width='260'
            height='200'
            alt='Apartment'
          />
        </Link>
      </div>
      <PlaceCardInfo />
    </article>
  );
}

export default PlaceCard;
