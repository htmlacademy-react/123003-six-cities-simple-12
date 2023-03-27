import { Offers } from '../../mocks/offers';
import NearPlace from '../near-place-card/near-place-card';

type NearPlacesListProps = {
  offers: Offers;
}

function NearPlacesList({ offers }: NearPlacesListProps): JSX.Element {
  return (
    <div className='near-places__list places__list'>
      {
        offers.map((offer) => (
          <NearPlace key={offer.id} offer={offer} />
        )
        ).slice(0, 3)
      }
    </div>
  );
}

export default NearPlacesList;
