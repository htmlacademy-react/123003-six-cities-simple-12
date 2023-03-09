import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Sprite from '../svg-sprite/svg-sprite';

function Layout(): JSX.Element {
  return (
    <Fragment>
      <Sprite />
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default Layout;
