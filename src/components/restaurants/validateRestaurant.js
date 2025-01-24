export const validateRestaurant = restaurant => {
    return {
        ...restaurant,
        name: restaurant.name?.trim() || "Тут должно быть название ресторана",
        menu: restaurant.menu?.length ? restaurant.menu : ["Тут должно быть меню"],
        reviews: restaurant.reviews?.length ? restaurant.reviews : ["Тут должны быть отзывы"],
    };
};
