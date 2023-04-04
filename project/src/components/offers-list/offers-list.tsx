import { Offers } from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';
import cn from 'classnames';
import { START_NEAR_PLACES_AMOUNT } from '../../const';

type OffersListProps = {
  offers: Offers;
  classNameList: string;
  classNameArticle: string;
  classNameWrapper: string;
  maxCardAmount: number;
  setSelectedOffer: (id: string) => void;
};

function OffersList({ offers, classNameList, classNameWrapper, classNameArticle, maxCardAmount, setSelectedOffer }: OffersListProps): JSX.Element {
  return (
    <div className={cn('places__list', classNameList)}>
      {
        offers.map((offer) => (
          <OfferCard
            offer={offer}
            key={offer.id}
            classNameWrapper={classNameWrapper}
            classNameArticle={classNameArticle}
            setSelectedOffer={setSelectedOffer}
          />
        )).slice(START_NEAR_PLACES_AMOUNT, maxCardAmount)
      }
    </div >
  );
}

export default OffersList;
