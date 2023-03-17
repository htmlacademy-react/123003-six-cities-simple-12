import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import NearPlace from '../../components/near-place/near-place';
import { Offer } from '../../mocks/offers';
import ReviewForm from '../../components/review-form/review-form';

type OfferPageProps = {
  offer: Offer;
  isAuthorized: boolean;
};

function OfferPage({ offer, isAuthorized }: OfferPageProps): JSX.Element {
  const {
    title,
    description,
    isPremium,
    type,
    rating,
    bedrooms,
    guests,
    price,
    options,
    photos,
    owner,
    reviews,
  } = offer;
  const params = useParams();
  if (params.id) {
    // eslint-disable-next-line no-console
    console.log(params);
  }

  return (
    <>
      <Helmet>
        <title>6 cities - {title}</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} />
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {photos.map((photo, index) => {
                const keyValue = `${index}`;
                return (
                  <div key={keyValue} className='property__image-wrapper'>
                    <img
                      className='property__image'
                      src={photo.src}
                      alt={photo.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {isPremium
                ? (
                  <div className='property__mark'>
                    <span>Premium</span>
                  </div>
                )
                : ''}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  {title}
                </h1>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: `${rating * 20}% ` }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {rating}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {guests} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {options.map((option, index) => {
                    const keyValue = `${index}`;
                    return (
                      <li key={keyValue} className='property__inside-item'>{option}</li>
                    );
                  })}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='property__avatar user__avatar'
                      src={owner.avatar}
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>{owner.name}</span>
                  {owner.isPro
                    ? '<span className="property__user-status">Pro</span>'
                    : ''}
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    {description}
                  </p>
                  <p className='property__text'>
                    {description}
                  </p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <h2 className='reviews__title'>
                  Reviews &middot; <span className='reviews__amount'>{reviews.length}</span>
                </h2>
                <ul className='reviews__list'>
                  {reviews.map((review) => {
                    const keyValue = `${review.id}`;
                    return (
                      <li key={keyValue} className='reviews__item'>
                        <div className='reviews__user user'>
                          <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                            <img
                              className='reviews__avatar user__avatar'
                              src={review.author.avatar}
                              width='54'
                              height='54'
                              alt='Reviews avatar'
                            />
                          </div>
                          <span className='reviews__user-name'>{review.author.name}</span>
                        </div>
                        <div className='reviews__info'>
                          <div className='reviews__rating rating'>
                            <div className='reviews__stars rating__stars'>
                              {
                                review.author.rating
                                  ? (
                                    <span style={{ width: `${review.author.rating * 20}% ` }}></span>
                                  )
                                  : ''
                              }
                              <span className='visually-hidden'>Rating</span>
                            </div>
                          </div>
                          <p className='reviews__text'>
                            {review.text}
                          </p>
                          <time className='reviews__time' dateTime={review.date}>
                            {review.date}
                          </time>
                        </div>
                      </li>
                    );
                  }).slice(0, 10)}
                </ul>
                {isAuthorized
                  ? <ReviewForm />
                  : ''}
              </section>
            </div>
          </div>
          <section className='property__map map'></section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              <NearPlace />
              <NearPlace />
              <NearPlace />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default OfferPage;
