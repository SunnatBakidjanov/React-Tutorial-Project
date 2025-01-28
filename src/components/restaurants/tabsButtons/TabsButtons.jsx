export const TabsButtons = ({ restaurants, handleSetIdOnClick }) => {
    return restaurants.map(restaurant => {
        const validateRestaurant = {
            ...restaurant,
            name: restaurant.name?.trim() || "Ресторан",
        };

        return (
            <button key={restaurant.id} className='restaurant-tab' style={{ padding: "10px 50px", cursor: "pointer" }} onClick={() => handleSetIdOnClick(restaurant.id)}>
                {validateRestaurant.name}
            </button>
        );
    });
};
