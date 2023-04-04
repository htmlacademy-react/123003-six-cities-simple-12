const RATING_STARS_COUNT = 5;

const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

const enum AppRoute {
  Login = '/login',
  Offer = '/offer/:id',
  Root = '/',
}

const enum RoomType{
Room = 'room',
Hotel = 'hotel',
Apartment = 'apartment',
House = 'house',
}

const RoomTypeToLabel = {
  [RoomType.Room]: 'Private Room',
  [RoomType.Hotel]: 'Hotel',
  [RoomType.Apartment]: 'Apartment',
  [RoomType.House]: 'House',
};

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const TILE_LAYER_ATTRIBUTION = '\'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="\'https://carto.com/attributions">CARTO</a>\'';

const MAX_NEAR_PLACES_AMOUNT = 3;

const MAX_REVIEWS_AMOUNT = 10;

const START_REVIEWS_AMOUNT = 0;

const START_NEAR_PLACES_AMOUNT = 0;

const RATING_COEFFICIENT = 20;

const reviewAvatarPhoto = {
  WIDTH:54,
  HEIGHT:54,
};

const offerOwnerPhoto = {
  WIDTH:74,
  HEIGHT:74,
};

const offerCardImage = {
  WIDTH:260,
  HEIGHT:200,
};

const LogoImage = {
  WIDTH:81,
  HEIGHT:41,
};

export { AppRoute, RATING_STARS_COUNT, RATING_TITLES, RoomTypeToLabel, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, RoomType, MAX_NEAR_PLACES_AMOUNT, MAX_REVIEWS_AMOUNT, RATING_COEFFICIENT, reviewAvatarPhoto, offerOwnerPhoto, offerCardImage, LogoImage, START_REVIEWS_AMOUNT, START_NEAR_PLACES_AMOUNT, URL_TEMPLATE, TILE_LAYER_ATTRIBUTION };
