import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './error-page.css';

function ErrorPage(): JSX.Element {
  return (
    <div className='page page--gray page--404'>
      <Helmet>
        <title>6 cities - Error 404 - page not found</title>
      </Helmet>
      <h1>Error 404</h1>
      <p>Page not found</p>
      <Link
        to='/'
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

export default ErrorPage;
