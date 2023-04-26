import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/no-found-page/not-found-page';
import { useAppSelector } from '../../hooks/index';

function OfferPageWrapper(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const offer = useAppSelector((state) => state.offerDetails);

  if (offer) {
    return <OfferPage offers={offers} offer={offer} />;
  }

  return <NotFoundPage />;
}

export default OfferPageWrapper;
