import { Link } from 'react-router-dom';

function Tab() {
  return (
    <li className='locations__item'>
      <Link
        className='locations__item-link tabs__item'
        to='/'
        title='/'
      >
        <span>Paris</span>
      </Link>
    </li>
  );
}
export default Tab;
