import leaflet from 'leaflet';
import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../mocks/offers';

type MapProps = {
  selectedOffer: string;
  offers: Offers;
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

function Map({ selectedOffer, offers }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);


  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.lat,
            lng: offer.city.location.lng,
          }, {
            icon: (offer.id === selectedOffer)
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
