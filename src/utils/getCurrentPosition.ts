const options = {
  timeout: 6000,
  maximumAge: 50000,
};

// TODO google geolocation api로 대체해보기
export const getCurrentPosition = (): Promise<GeolocationPosition | null> => {
  return new Promise((resolve, reject) => {
    if (window?.navigator?.geolocation == null) {
      reject('Geolocation API를 지원하지 않아요.');
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error),
      options
    );
  });
};
