import { useEffect } from 'react';

import { getCurrentPosition } from '@/utils/getCurrentPosition';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { GEO_LOCATION_STORAGE_KEY } from '@/constants';
import { geoPositionObjectify } from '@/utils/geoPosition';

export function useGeoLocation(): GeolocationPosition | null {
  const [geoLocation, setGeoLocation] = useLocalStorage<GeolocationPosition | null>(
    GEO_LOCATION_STORAGE_KEY,
    null
  );

  useEffect(() => {
    (async () => {
      if (geoLocation) {
        return;
      }
      try {
        const geoPosition = await getCurrentPosition();
        if (geoPosition) {
          const geoPositionObj = geoPositionObjectify(geoPosition);
          setGeoLocation(geoPositionObj);
        }
      } catch (error) {
        throw error;
      }
    })();
  }, [geoLocation, setGeoLocation]);

  return geoLocation;
}
