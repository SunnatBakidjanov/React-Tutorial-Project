import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import { selectUserById } from "../../redux/entities/users/slice";

import { Reviews } from "./Reviews";

export const ReviewsContainer = ({ id }) => {
    const review = useSelector(state => selectReviewById(state, id));
    const user = useSelector(state => selectUserById(state, review.userId));

    if (!review || !user) return;

    return <Reviews userName={user.name} text={review.text} rating={review.rating} />;
};
