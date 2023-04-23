import { useParams } from 'react-router-dom';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';
import { useAppSelector } from '../../hooks/index';

type OfferPageWrapperProps = {
  isAuthorized: boolean;
};

function OfferPageWrapper({ isAuthorized }: OfferPageWrapperProps): JSX.Element {
  const offers = useAppSelector((state) => state.filteredOffers);
  const findOffer = (id?: string) => offers.find((offer) => offer.id === id);
  const { id } = useParams();

  const offer = findOffer(id);
  if (offer) {
    return <OfferPage offers={offers} offer={offer} isAuthorized={isAuthorized} />;
  }

  return <ErrorPage />;
}

export default OfferPageWrapper;
