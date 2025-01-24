export const validateDish = dish => {
    return {
        ...dish,
        name: dish.name?.trim() || "Тут должно быть название блюда",
        price: dish.price ?? "Цена не указана",
        ingredients: dish.ingredients?.length ? dish.ingredients : ["Ингредиенты пока не добавлены, но они скоро появятся"],
    };
};
