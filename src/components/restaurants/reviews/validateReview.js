export const validateReview = review => {
    return {
        ...review,
        user: review.user?.trim() || "Anonim",
        text: review.text?.trim() || "Нет комментария",
        rating: review.rating ?? "Нет рейтинга",
    };
};
