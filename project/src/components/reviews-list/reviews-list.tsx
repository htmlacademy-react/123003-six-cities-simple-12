import ReviewItem from '../review-item/review-item';
import { Review } from '../../mocks/reviews';
import { MAX_REVIEWS_COUNT, START_REVIEWS_COUNT } from '../../const';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      )).slice(START_REVIEWS_COUNT, MAX_REVIEWS_COUNT)}
    </ul>
  );
}

export default ReviewsList;
