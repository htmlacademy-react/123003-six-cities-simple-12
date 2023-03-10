import { Link } from 'react-router-dom';
import PlaceCardInfo from '../place-card-info/place-card-info';

function NearPlace() {
  return (
    <article className='near-places__card place-card'>
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
      <PlaceCardInfo />
    </article>
  );
}

export default NearPlace;
