import { Link } from 'react-router-dom';

function PlaceCardInfo() {
  return (
    <div className='place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro;80</b>
          <span className='place-card__price-text'>
            &#47;&nbsp;night
          </span>
        </div>
      </div>
      <div className='place-card__rating rating'>
        <div className='place-card__stars rating__stars'>
          <span style={{ width: '80%' }}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <h2 className='place-card__name'>
        <Link
          to='/offer'
          title='/offer'
        >Wood and stone place
        </Link>
      </h2>
      <p className='place-card__type'>Private room</p>
    </div>
  );
}

export default PlaceCardInfo;
