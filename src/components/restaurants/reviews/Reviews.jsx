import { ReviewItem } from "../reviewItem/ReviewItem";

export const Reviews = ({ reviews }) => {
    return (
        <ul className='reviews'>
            {reviews.map(review => {
                if (review.user === undefined || review.user.trim() === "") {
                    if (review.user === undefined) console.error(`Ошибка: У пользователя с id ${review.id} отсутствует свойство user.`);
                    review = { ...review, user: "Anonim" };
                }

                if (review.text === undefined || review.text.trim() === "") {
                    if (review.text === undefined) console.error(`Ошибка: У пользователя с id ${review.id} отсутствует свойство text.`);

                    review = { ...review, text: "Нет комментария" };
                }

                if (review.rating === undefined) {
                    console.error(`Ошибка: У пользователя с id ${review.id} отсутствует свойство rating.`);

                    review = { ...review, rating: "Нет рейтинга" };
                }

                return (
                    <li className='restaurants-review' key={review.id}>
                        <ReviewItem user={review.user} text={review.text} rating={review.rating} />
                    </li>
                );
            })}
        </ul>
    );
};
