import { Link } from 'react-router-dom';
import { cities } from '../../mocks/cities';
import { Offers } from '../../mocks/offers';

type TabsProps = {
  offers: Offers;
}

function Tabs({ offers }: TabsProps): JSX.Element {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map((city, index) => {
            const keyValue = `${index}`;
            return (
              <li key={keyValue} className='locations__item'>
                <Link
                  className='locations__item-link tabs__item'
                  to={`/${city.name}`}
                  title={`/${city.name}`}
                >
                  <span>{city.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
