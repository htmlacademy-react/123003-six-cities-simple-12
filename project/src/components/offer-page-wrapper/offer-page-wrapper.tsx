import { useParams } from 'react-router-dom';
import { Offers } from '../../mocks/offers';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';

type OfferPageWrapperProps = {
  offers: Offers;
  isAuthorized: boolean;
};

function OfferPageWrapper({ offers, isAuthorized }: OfferPageWrapperProps): JSX.Element {
  const findOffer = (id: string) => offers.find((offer) => offer.id === id);
  const { id } = useParams();

  if (id) {
    const offer = findOffer(id);
    if (offer) {
      return <OfferPage offers={offers} offer={offer} isAuthorized={isAuthorized} />;
    }
  }

  return <ErrorPage />;
}


export default OfferPageWrapper;
