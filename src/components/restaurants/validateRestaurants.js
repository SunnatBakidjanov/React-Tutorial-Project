export const validateRestaurants = restaurant => {
    const updatedRestaurant = { ...restaurant };

    if (updatedRestaurant?.name?.trim() === "" || updatedRestaurant.name === undefined) {
        console.error(`Ошибка: name в restaurants ${updatedRestaurant.id} отсутствует или пуст`);
        updatedRestaurant.name = "Ресторан";
    }

    if (!Array.isArray(restaurant?.menu) || restaurant.menu.length === 0) {
        console.error(`Ошибка: menu в restaurants ${updatedRestaurant?.name} отсутствует или пуст`);
        updatedRestaurant.menu = [""];
    }

    if (!Array.isArray(restaurant?.reviews) || restaurant.reviews.length === 0) {
        console.error(`Ошибка: reviews в restaurants ${updatedRestaurant?.name} отсутствует или пуст`);
        updatedRestaurant.reviews = [""];
    }

    return updatedRestaurant;
};
