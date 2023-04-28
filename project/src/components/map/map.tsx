import leaflet from 'leaflet';
import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offer';
import { useAppSelector } from '../../hooks/index';

type MapProps = {
  selectedOffer: string;
  offers: Offers;
  selectedCity: string;
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

function Map({ selectedCity, selectedOffer, offers }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);
  const filteredOffers = useAppSelector((state) => state.filteredOffers);
  const cityLocation = filteredOffers[0].city.location;

  useEffect(() => {
    if (map) {
      const { latitude, longitude, zoom } = cityLocation;
      map.flyTo([latitude, longitude], zoom);
    }
  }, [map, cityLocation]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === selectedOffer)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer, selectedCity]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
