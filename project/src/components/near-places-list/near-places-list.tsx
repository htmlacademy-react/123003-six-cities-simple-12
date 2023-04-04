import { Offers } from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';
import { START_NEAR_PLACES_COUNT, MAX_NEAR_PLACES_COUNT } from '../../const';

type NearPlacesListProps = {
  offers: Offers;
  className: string;
  classNameWrapper: string;
}

function NearPlacesList({ offers, className, classNameWrapper }: NearPlacesListProps): JSX.Element {
  return (
    <div className='near-places__list places__list'>
      {
        offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} className={className} classNameWrapper={classNameWrapper} />
        )
        ).slice(START_NEAR_PLACES_COUNT, MAX_NEAR_PLACES_COUNT)
      }
    </div>
  );
}

export default NearPlacesList;
