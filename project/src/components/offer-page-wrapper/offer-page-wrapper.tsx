import { useParams } from 'react-router-dom';
import OfferPage from '../../pages/offer-page/offer-page';
import { useAppSelector } from '../../hooks/index';
import NotFoundPage from '../../pages/no-found-page/not-found-page';

function OfferPageWrapper(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const findOffer = (id?: string) => offers.find((offer) => offer.id === id);
  const { id } = useParams();
  const offer = findOffer(id);

  if (offer) {
    return <OfferPage offers={offers} offer={offer} />;
  }

  return <NotFoundPage />;
}

export default OfferPageWrapper;
