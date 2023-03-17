import { useState } from 'react';
import { offers } from '../../mocks/offers';
import { Link } from 'react-router-dom';

// type OffersListProps = {
//   offers: Offer[];
// };

function OffersList(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState(false);

  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer) => {
          const {
            id,
            title,
            isPremium,
            type,
            photos,
            price,
            rating,
          } = offer;
          return (
            <article key={id} className='cities__card place-card'>
              {isPremium
                ? (
                  <div className='place-card__mark'>
                    <span>Premium</span>
                  </div>
                )
                : ''}
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
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>&euro;{price}</b>
                    <span className='place-card__price-text'>
                      &#47;&nbsp;night
                    </span>
                  </div>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: `${rating * 20}% ` }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <Link
                    to={`offer/${id}`}
                    title='{title}'
                  >{title}
                  </Link>
                </h2>
                <p className='place-card__type'>{type}</p>
              </div>
            </article>
          );
        })
      }
    </div>
  );
}

export default OffersList;
