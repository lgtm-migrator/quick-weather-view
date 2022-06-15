import { useEffect } from 'react';
import { toast } from 'react-toastify';

import ToastInnerButton from '@/components/Common/Fetching/ToastInnerButton';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { GEO_LOCATION_STORAGE_KEY } from '@/constants';
import { getCurrentPosition } from '@/utils/getCurrentPosition';
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
      } catch (error: any) {
        switch (error.code) {
          case 1:
            toast.info(ToastInnerButton({ message: '위치 권한을 허용해주세요' }));
            break;
          case 2:
            toast.info(ToastInnerButton({ message: '위치 정보를 획득하지 못했어요' }));
            break;
          case 3:
            toast.info(
              ToastInnerButton({
                message: '위치 정보를 획득하지 못했어요',
              })
            );
            break;

          default:
            toast.warning(
              ToastInnerButton({
                message: '다시 시도해주세요',
              })
            );
            break;
        }
      }
    })();
  }, [geoLocation, setGeoLocation]);

  return geoLocation;
}
