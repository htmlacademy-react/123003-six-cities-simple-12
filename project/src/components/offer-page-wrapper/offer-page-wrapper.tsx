import { useParams } from 'react-router-dom';
import OfferPage from '../../pages/offer-page/offer-page';
import Error from '../../pages/error-page/error-page';
import { useAppSelector } from '../../hooks/index';

function OfferPageWrapper(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const findOffer = (id?: string) => offers.find((offer) => offer.id === id);
  const { id } = useParams();
  const offer = findOffer(id);

  if (offer) {
    return <OfferPage offers={offers} offer={offer} />;
  }

  return <Error />;
}

export default OfferPageWrapper;
