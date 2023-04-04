import Tabs from '../../components/tabs/tabs';
import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';
import { Offers, Offer } from '../../mocks/offers';
import Map from '../../components/map/map';
import { cities } from '../../mocks/cities';
import { useState } from 'react';

type MainPageProps = {
  offers: Offers;
  isAuthorized: boolean;
  className: string;
  classNameWrapper: string;
};

function MainPage({ offers, isAuthorized, className = 'cities__places-list', classNameWrapper = 'cities__image-wrapper' }: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState({});

  const onListItemHover = (listItemName: string) => {
    const currentOffer: Offer = offers.find((offer) =>
      offer.title === listItemName,
    );
    setSelectedOffer(currentOffer);
  };

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>6 cities - Places to stay</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs offers={offers} />
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {offers.length} places to stay in {cities[3].name}
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
              <OffersList offers={offers} onListItemHover={onListItemHover} />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map offers={offers} city={cities[3]} selectedOffer={selectedOffer} className={className} classNameWrapper={classNameWrapper} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
