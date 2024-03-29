import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function Nav() {
  const dispatch = useAppDispatch();

  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        <li className='header__nav-item user'>
          <div className='header__nav-profile'>
            <div className='header__avatar-wrapper user__avatar-wrapper'></div>
            <span className='header__user-name user__name'>
              Oliver.conner@gmail.com
            </span>
          </div>
        </li>
        <li className='header__nav-item'>
          <Link
            to='/login'
            title='/login'
            className='header__nav-link'
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            <span className='header__signout'>Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
