const RATING_STARS_COUNT = 5;

const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

const enum AppRoute {
  Login = '/login',
  Offer = '/offer/:id',
  Root = '/',
}

const enum RoomTypeToLabel {
  Room = 'Private Room',
  Hotel = 'Hotel',
  Apartment = 'Apartment',
  House = 'House',
}

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export { AppRoute, RATING_STARS_COUNT, RATING_TITLES, RoomTypeToLabel, URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
