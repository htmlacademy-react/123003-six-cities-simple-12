import { Link } from 'react-router-dom';

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
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;price</b>
            <span className='place-card__price-text'>
              &#47;&nbsp;night
            </span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link
            to='{title}'
            title='{title}'
          >title
          </Link>
        </h2>
        <p className='place-card__type'>type</p>
      </div>
    </article>
  );
}

export default NearPlace;
