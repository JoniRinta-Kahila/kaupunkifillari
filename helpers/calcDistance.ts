export interface IPosition {
  lat: number,
  lon: number,
}

// https://stackoverflow.com/a/29119331
const CalcDistance = (position1: IPosition, position2: IPosition) => {
  const toRadians = (rad: number) => {
    return rad * (180 / Math.PI)
  }
  var lat1=position1.lat;
  var lat2=position2.lat;
  var lon1=position1.lon;
  var lon2=position2.lon;
  var R = 6371000; // metres
  var φ1 = toRadians(lat1);
  var φ2 = toRadians(lat2);
  var Δφ = toRadians(lat2-lat1);
  var Δλ = toRadians(lon2-lon1);

  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ/2) * Math.sin(Δλ/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = R * c;
  return d;
}

export default CalcDistance;
