// 브라우저에서 GeolocationPosition 기능을 사용할 때 반환되는 객체는 문자열화할 수 없기에,
// GeolocationPosition 객체와 동일한 속성을 가진 객체를 만들어서 캐싱에 사용함
export function geoPositionObjectify(geoPosition: GeolocationPosition): GeolocationPosition {
  return {
    coords: {
      accuracy: geoPosition.coords.accuracy,
      altitude: geoPosition.coords.altitude,
      altitudeAccuracy: geoPosition.coords.altitudeAccuracy,
      heading: geoPosition.coords.heading,
      latitude: geoPosition.coords.latitude,
      longitude: geoPosition.coords.longitude,
      speed: geoPosition.coords.speed,
    },
    timestamp: geoPosition.timestamp,
  };
}
