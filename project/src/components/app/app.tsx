import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../../components/layout/layout';
import MainPage from '../../pages/main-page/main-page';
import ErrorPage from '../../pages/error-page/error-page';
import OfferPageWrapper from '../offer-page-wrapper/offer-page-wrapper';
import LoginPage from '../../pages/login-page/login-page';
import { AppRoute } from '../../const';
import { Offers } from '../../mocks/offers';

type AppScreenProps = {
  offers: Offers;
  isAuthorized: boolean;
};

function App({ offers, isAuthorized }: AppScreenProps): JSX.Element {
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
              element={<MainPage isAuthorized={isAuthorized} />}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage isAuthorized={isAuthorized} />}
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPageWrapper offers={offers} isAuthorized={isAuthorized} />}
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
