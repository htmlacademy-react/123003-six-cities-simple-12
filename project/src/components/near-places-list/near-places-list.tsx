import { Offers } from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';
import { START_NEAR_PLACES_COUNT, MAX_NEAR_PLACES_COUNT } from '../../const';

type NearPlacesListProps = {
  offers: Offers;
}

function NearPlacesList({ offers }: NearPlacesListProps): JSX.Element {
  return (
    <div className='near-places__list places__list'>
      {
        offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        )
        ).slice(START_NEAR_PLACES_COUNT, MAX_NEAR_PLACES_COUNT)
      }
    </div>
  );
}

export default NearPlacesList;
