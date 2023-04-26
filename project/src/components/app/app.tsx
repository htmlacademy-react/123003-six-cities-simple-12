import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../../components/layout/layout';
import MainPage from '../../pages/main-page/main-page';
import ErrorPage from '../../pages/error-page/error-page';
import OfferPageWrapper from '../offer-page-wrapper/offer-page-wrapper';
import LoginPage from '../../pages/login-page/login-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import Loading from '../../pages/loading/loading';
import PrivateRoute from '../private-route/private-route';


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
      <BrowserRouter>
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
              element={<ErrorPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
