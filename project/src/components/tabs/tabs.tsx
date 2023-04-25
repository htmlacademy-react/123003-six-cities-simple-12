import { Link } from 'react-router-dom';
import { setSelectedCity, setSelectedOffers } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';
import cn from 'classnames';
import { Cities } from '../../const';

type TabsProps = {
  selectedCity: string;
}

function Tabs({ selectedCity }: TabsProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {Object.values(Cities).map((city) => (
            <li
              key={city}
              className='locations__item'
            >
              <Link
                className={cn('locations__item-link tabs__item', city === selectedCity && 'tabs__item--active')}
                to={`/${city}`}
                title={`/${city}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(setSelectedCity(city));
                  dispatch(setSelectedOffers(selectedCity));
                }}
                onLoad={
                  (evt) => {
                    evt.preventDefault();
                    dispatch(setSelectedOffers(selectedCity));
                  }
                }
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div >
  );
}

export default Tabs;
