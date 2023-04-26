import { Review } from '../../types/offer';
import { RATING_COEFFICIENT, reviewAvatarPhoto } from '../../const';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { id, author, text, date } = review;
  const { rating, avatar, name } = author;

  return (
    <li key={id} className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={avatar}
            width={reviewAvatarPhoto.WIDTH}
            height={reviewAvatarPhoto.HEIGHT}
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>{name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            {
              rating &&
              <span style={{ width: `${rating * RATING_COEFFICIENT}% ` }}></span>
            }
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>
          {text}
        </p>
        <time className='reviews__time' dateTime={date}>
          {date}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
