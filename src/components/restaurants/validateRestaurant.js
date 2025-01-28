export const validateRestaurant = restaurant => {
    const errors = [];

    const name =
        restaurant?.name?.trim() ||
        (() => {
            errors.push("Ошибка: name отсутствует или пуст");
            return "Ресторан";
        })();

    const menu =
        Array.isArray(restaurant?.menu) && restaurant.menu.length > 0
            ? restaurant.menu
            : (() => {
                  errors.push("Ошибка: menu отсутствует или пуст");
                  return ["Меню недоступно"];
              })();

    const reviews =
        Array.isArray(restaurant?.reviews) && restaurant.reviews.length > 0
            ? restaurant.reviews
            : (() => {
                  errors.push("Ошибка: reviews отсутствуют или пусты");
                  return ["Отзывы недоступны"];
              })();

    if (errors.length > 0) {
        console.error("Ошибки в данных ресторана:", errors);
    }

    return {
        name,
        menu,
        reviews,
    };
};
