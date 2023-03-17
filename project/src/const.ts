const RATING_STARS_COUNT = 5;

const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

const enum AppRoute {
  Login = '/login',
  Offer = '/offer/:id',
  Root = '/',
}

export { AppRoute, RATING_STARS_COUNT, RATING_TITLES };
