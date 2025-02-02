export const validateId = restaurants => {
    const idCount = new Set();

    return restaurants.map((restaurant, index) => {
        const updatedRestaurant = { ...restaurant };

        let newId = updatedRestaurant.id || `generated-${index}`;

        const count = (idCount.has(newId) || 0) + 1;
        idCount.add(newId, count);
        if (count > 1) newId = `${newId}-${count}`;

        updatedRestaurant.id = newId;
        return updatedRestaurant;
    });
};
