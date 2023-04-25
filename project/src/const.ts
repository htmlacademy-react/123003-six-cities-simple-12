export const RATING_STARS_COUNT = 5;

export const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export const enum AppRoute {
  Login = '/login',
  Offer = '/offer/:id',
  Root = '/',
}

export const enum RoomType{
Room = 'room',
Hotel = 'hotel',
Apartment = 'apartment',
House = 'house',
}

export const RoomTypeToLabel = {
  [RoomType.Room]: 'Private Room',
  [RoomType.Hotel]: 'Hotel',
  [RoomType.Apartment]: 'Apartment',
  [RoomType.House]: 'House',
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const TILE_LAYER_ATTRIBUTION = '\'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="\'https://carto.com/attributions">CARTO</a>\'';

export const MAX_NEAR_PLACES_AMOUNT = 3;

export const MAX_REVIEWS_AMOUNT = 10;

export const START_REVIEWS_AMOUNT = 0;

export const START_NEAR_PLACES_AMOUNT = 0;

export const RATING_COEFFICIENT = 20;

export const reviewAvatarPhoto = {
  WIDTH:54,
  HEIGHT:54,
};

export const offerOwnerPhoto = {
  WIDTH:74,
  HEIGHT:74,
};

export const offerCardImage = {
  WIDTH:260,
  HEIGHT:200,
};

export const LogoImage = {
  WIDTH:81,
  HEIGHT:41,
};

export const DEFAULT_CITY = 'Paris';

export const SortTypeToLabel = {
  POPULAR: 'Popular',
  LOW_TO_HIGHT: 'Price: low to high',
  HIGHT_TO_LOW: 'Price: high to low',
  TOP: 'Top rated first',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments/{hotelId}',
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const TIMEOUT_SHOW_ERROR = 2000;
