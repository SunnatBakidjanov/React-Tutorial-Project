export const validateRestaurantItem = restaurants => {
    const idCount = new Map();

    return restaurants.map(restaurant => {
        let newId = restaurant.id;

        const count = (idCount.get(newId) || 0) + 1;
        idCount.set(newId, count);

        newId = count > 1 ? `${newId}-${count}` : newId;

        return {
            ...restaurant,
            name: restaurant.name?.trim() || "Ресторан",
            id: newId,
        };
    });
};
