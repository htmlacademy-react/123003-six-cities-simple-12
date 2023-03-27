import ReviewItem from '../review-item/review-item';
import { Review } from '../../mocks/reviews';

type ReviewsListProps = {
  reviews: Review[];
  // review: Review;
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      )).slice(0, 10)}
    </ul>
  );
}

export default ReviewsList;
