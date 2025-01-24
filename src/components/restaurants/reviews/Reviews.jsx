import { ReviewItem } from "../reviewItem/ReviewItem";
import { validateReview } from "./validateReview";

export const Reviews = ({ reviews }) => {
    return (
        <ul className='reviews'>
            {reviews.map(review => {
                const validatedReview = validateReview(review);

                return (
                    <li className='restaurants-review' key={validatedReview.id}>
                        <ReviewItem user={validatedReview.user} text={validatedReview.text} rating={validatedReview.rating} />
                    </li>
                );
            })}
        </ul>
    );
};
