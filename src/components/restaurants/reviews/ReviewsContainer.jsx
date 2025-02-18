import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import { selectUserByEntities } from "../../redux/entities/users/slice";

import { Reviews } from "./Reviews";

export const ReviewsContainer = ({ id }) => {
    const reviewId = useSelector(state => selectReviewById(state, id));
    const user = useSelector(selectUserByEntities);

    if (!reviewId && !user) return;

    return <Reviews userName={user[reviewId.userId].name} text={reviewId.text} rating={reviewId.rating} />;
};
