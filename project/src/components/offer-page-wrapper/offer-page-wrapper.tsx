import { useParams } from 'react-router-dom';
import { Offers } from '../../mocks/offers';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';

type OfferPageWrapperProps = {
  offers: Offers;
  isAuthorized: boolean;
  className: string;
  classNameWrapper: string;
};

function OfferPageWrapper({ offers, isAuthorized, className, classNameWrapper }: OfferPageWrapperProps): JSX.Element {
  const findOffer = (id: string) => offers.find((offer) => offer.id === id);

  const { id } = useParams();
  const offer = findOffer(id);
  if (offer) {
    return <OfferPage offers={offers} offer={offer} isAuthorized={isAuthorized} className={className} classNameWrapper={classNameWrapper} />;
  }
  return <ErrorPage />;
}


export default OfferPageWrapper;
