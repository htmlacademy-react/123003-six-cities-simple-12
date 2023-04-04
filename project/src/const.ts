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

const enum pageClassModificator {
  Main = 'near-places__card',
  Offer = 'cities__card',
}
const MAX_NEAR_PLACES_COUNT = 3;
const MAX_REVIEWS_COUNT = 10;
const START_REVIEWS_COUNT = 0;
const START_NEAR_PLACES_COUNT = 0;
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

export { AppRoute, RATING_STARS_COUNT, RATING_TITLES, RoomTypeToLabel, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, RoomType, pageClassModificator, MAX_NEAR_PLACES_COUNT, MAX_REVIEWS_COUNT, RATING_COEFFICIENT, reviewAvatarPhoto, offerOwnerPhoto, offerCardImage, LogoImage, START_REVIEWS_COUNT, START_NEAR_PLACES_COUNT };
