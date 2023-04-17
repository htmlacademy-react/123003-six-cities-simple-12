import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/index';
import { useState } from 'react';
import { DEFAULT_CITY } from '../../const';
import Cities from '../../components/cities/cities';

type MainPageProps = {
  isAuthorized: boolean;
};

function MainPage({ isAuthorized }: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState(DEFAULT_CITY);
  const selectedOffers = useAppSelector((state) => state.selectedOffers);
  const selectedCity = useAppSelector((state) => state.selectedCity);

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>6 cities - Places to stay</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Cities selectedCity={selectedCity} />
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {selectedOffers.length} places to stay in {selectedCity}
              </b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li
                    className='places__option places__option--active'
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OffersList
                offers={selectedOffers}
                classNameList='cities__places-list tabs__content'
                classNameArticle='cities__card'
                classNameWrapper='cities__image-wrapper'
                maxCardAmount={selectedOffers.length}
                setSelectedOffer={setSelectedOffer}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  offers={selectedOffers}
                  selectedOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
