import { Link } from 'react-router-dom';
import { LogoImage } from '../../const';
function Logo() {
  return (
    <Link
      to='/'
      title='/'
      className='header__logo-link header__logo-link--active'
    >
      <img
        className='header__logo'
        src='img/logo.svg'
        alt='6 cities logo'
        width={LogoImage.WIDTH}
        height={LogoImage.HEIGHT}
      />
    </Link>
  );
}

export default Logo;
