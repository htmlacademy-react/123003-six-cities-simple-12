import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../../components/layout/layout';
import MainPage from '../../pages/main-page/main-page';
import OfferPageWrapper from '../offer-page-wrapper/offer-page-wrapper';
import LoginPage from '../../pages/login-page/login-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import Loading from '../../pages/loading/loading';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import NotFoundPage from '../../pages/no-found-page/not-found-page';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Loading />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout />}
          >
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                >
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPageWrapper />}
            />
            <Route
              path='*'
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
