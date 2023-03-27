import { Offers, Offer } from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  onListItemHover: Offer;
};

function OffersList({ offers, onListItemHover }: OffersListProps): JSX.Element {
  const listItemHoverHandler = (evt) => {
    onListItemHover(evt.target.innerText);
  };

  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer) => (
          <OfferCard offer={offer} key={offer.id} onMouseEnter={listItemHoverHandler} />
        ))
      }
    </div>
  );
}

export default OffersList;
