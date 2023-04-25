import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/index';
import { useState } from 'react';
import Cities from '../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import { SortTypeToLabel } from '../../const';

function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.filteredOffers);
  let sorted = [...offers];
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const activeSortType = useAppSelector((state) => state.activeSortType);
  const [selectedOffer, setSelectedOffer] = useState(selectedCity);

  switch (activeSortType) {
    case SortTypeToLabel.POPULAR:
      sorted = [...offers];
      break;
    case SortTypeToLabel.HIGHT_TO_LOW:
      sorted.sort((a, b) => b.price - a.price);
      break;
    case SortTypeToLabel.LOW_TO_HIGHT:
      sorted.sort((a, b) => a.price - b.price);
      break;
    case SortTypeToLabel.TOP:
      sorted.sort((a, b) => b.rating - a.rating);
      break;
  }

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>6 cities - Places to stay</title>
      </Helmet>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Cities selectedCity={selectedCity} />
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {offers.length} places to stay in {selectedCity}
              </b>
              <Sort activeSortType={activeSortType} />
              <OffersList
                offers={sorted}
                classNameList='cities__places-list tabs__content'
                classNameArticle='cities__card'
                classNameWrapper='cities__image-wrapper'
                maxCardAmount={offers.length}
                setSelectedOffer={setSelectedOffer}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  selectedCity={selectedCity}
                  offers={offers}
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
