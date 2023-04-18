import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import ReviewForm from '../../components/review-form/review-form';
import { RoomTypeToLabel, RATING_COEFFICIENT, offerOwnerPhoto } from '../../const';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { Offer, Offers } from '../../mocks/offers';
import { MAX_NEAR_PLACES_AMOUNT } from '../../const';
import { useState } from 'react';

type OfferPageProps = {
  offers: Offers;
  offer: Offer;
  isAuthorized: boolean;
};

function OfferPage({ offer, isAuthorized, offers }: OfferPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState('0');
  const {
    title,
    description,
    isPremium,
    rating,
    bedrooms,
    guests,
    price,
    options,
    photos,
    owner,
    reviews,
    type,
  } = offer;

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
              {photos && photos.map((photo, index) => {
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
              {isPremium &&
                <div className='property__mark'>
                  <span>Premium</span>
                </div>}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  {title}
                </h1>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={rating ? { width: `${rating * RATING_COEFFICIENT}% ` } : { width: `${RATING_COEFFICIENT}% ` }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {rating}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {RoomTypeToLabel[type]}
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
                      width={offerOwnerPhoto.WIDTH}
                      height={offerOwnerPhoto.HEIGHT}
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>{owner.name}</span>
                  {owner.isPro && <span className="property__user-status">Pro</span>}
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
                {reviews && <ReviewsList reviews={reviews} />}
                {isAuthorized && <ReviewForm />}
              </section>
            </div>
          </div>
          <section className='property__map map'>
            <Map
              offers={offers}
              selectedOffer={selectedOffer}
            />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <OffersList
              offers={offers}
              classNameList='near-places__list'
              classNameArticle='near-places__card'
              classNameWrapper='near-places__image-wrapper'
              maxCardAmount={MAX_NEAR_PLACES_AMOUNT}
              setSelectedOffer={setSelectedOffer}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default OfferPage;
