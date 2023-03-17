import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Setting = {
  OffersCount: 312,
  isAuthorized: true,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      isAuthorized={Setting.isAuthorized}
      offers={offers}
      offersCount={Setting.OffersCount}
    />
  </React.StrictMode>
);
