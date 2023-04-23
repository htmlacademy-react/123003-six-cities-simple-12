import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/index';
import { useState } from 'react';
import Cities from '../../components/cities/cities';
import Sort from '../../components/sort/sort';
import { SortTypeToLabel } from '../../const';

type MainPageProps = {
  isAuthorized: boolean;
};

function MainPage({ isAuthorized }: MainPageProps): JSX.Element {
  let offers = useAppSelector((state) => state.filteredOffers);
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const activeSortType = useAppSelector((state) => state.activeSortType);
  const [selectedOffer, setSelectedOffer] = useState(selectedCity);

  switch (activeSortType) {
    case SortTypeToLabel.POPULAR:
      offers = [...offers];
      break;
    case SortTypeToLabel.HIGHT_TO_LOW:
      offers.sort((a, b) => b.price - a.price);
      break;
    case SortTypeToLabel.LOW_TO_HIGHT:
      offers.sort((a, b) => a.price - b.price);
      break;
    case SortTypeToLabel.TOP:
      offers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      offers = [...offers];
      break;
  }

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
                {offers.length} places to stay in {selectedCity}
              </b>
              <Sort activeSortType={activeSortType} />
              <OffersList
                offers={offers}
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
