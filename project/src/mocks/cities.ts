export type City = {
  name: string;
  lat: number;
  lng: number;
  zoom: number;
}

const cities: City[] = [
  {
    name: 'Paris',
    lat: 48.864716,
    lng: 2.349014,
    zoom: 10,
  },
  {
    name: 'Cologne',
    lat: 50.935173,
    lng:  6.953101,
    zoom: 10,
  },
  {
    name: 'Brussels',
    lat: 50.85045,
    lng: 4.34878,
    zoom: 10,
  },
  {
    name: 'Amsterdam',
    lat: 52.377956,
    lng:  4.897070,
    zoom: 10,
  },
  {
    name: 'Hamburg',
    lat: 53.551086,
    lng:  9.993682,
    zoom: 10,
  },
  {
    name: 'Dusseldorf',
    lat: 51.233334,
    lng:  6.783333,
    zoom: 10,
  },
];

export {cities};
