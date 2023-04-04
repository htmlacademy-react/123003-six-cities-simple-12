import { Outlet } from 'react-router-dom';
import Sprite from '../svg-sprite/svg-sprite';

function Layout() {
  return (
    <>
      <Sprite />
      <Outlet />
    </>
  );
}

export default Layout;
