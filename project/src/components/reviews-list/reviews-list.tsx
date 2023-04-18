import ReviewItem from '../review-item/review-item';
import { Review } from '../../mocks/reviews';
import { MAX_REVIEWS_AMOUNT, START_REVIEWS_AMOUNT } from '../../const';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      )).slice(START_REVIEWS_AMOUNT, MAX_REVIEWS_AMOUNT)}
    </ul>
  );
}

export default ReviewsList;
