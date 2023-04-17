import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store/index';

const Setting = {
  isAuthorized: true,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        isAuthorized={Setting.isAuthorized}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>
);
