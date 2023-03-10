import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import MainPage from '../../pages/main-page/main-page';
import ErrorPage from '../../pages/error-page/error-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';

type AppScreenProps = {
  offersCount: number;
};

function App({ offersCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            path=''
            index
            element={<MainPage offersCount={offersCount} />}
          />
          <Route
            path='login'
            element={<LoginPage />}
          />
          <Route
            path='offer/:id'
            element={<OfferPage />}
          />
          <Route
            path='*'
            element={<ErrorPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
