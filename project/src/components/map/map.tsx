import leaflet from 'leaflet';
import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Offers, Offer } from '../../mocks/offers';
import { City } from '../../mocks/cities';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: Offer;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, offers, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.coordinates.lat,
            lng: offer.coordinates.lng,
          }, {
            icon: (offer.title === selectedOffer.title)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
