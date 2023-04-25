import { MutableRefObject, useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import { Offer } from '../types/offer';
import { URL_TEMPLATE, TILE_LAYER_ATTRIBUTION } from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, offer: Offer) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        },
        zoom: offer.city.location.zoom,
      });

      leaflet
        .tileLayer(URL_TEMPLATE,
          {
            attribution: TILE_LAYER_ATTRIBUTION,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, offer]);

  return map;
}

export default useMap;
