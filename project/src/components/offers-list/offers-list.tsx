import { Offers, Offer } from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  onListItemHover: Offer;
  className: string;
  classNameWrapper: string;
};

function OffersList({ offers, onListItemHover, className, classNameWrapper }: OffersListProps): JSX.Element {
  const listItemHoverHandler = (evt) => {
    onListItemHover(evt.target.innerText);
  };

  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer) => (
          <OfferCard offer={offer} key={offer.id} onMouseEnter={listItemHoverHandler} className={className} classNameWrapper={classNameWrapper} />
        ))
      }
    </div>
  );
}

export default OffersList;
