import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../../components/layout/layout';
import MainPage from '../../pages/main-page/main-page';
import ErrorPage from '../../pages/error-page/error-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import { AppRoute } from '../../const';

type AppScreenProps = {
  offersCount: number;
};

function App({ offersCount }: AppScreenProps): JSX.Element {
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
              element={<MainPage offersCount={offersCount} />}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage />}
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
