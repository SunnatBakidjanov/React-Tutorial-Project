export const TabsButtons = ({ restaurants, setActiveRestaurant }) => {
    return restaurants.map(restaurant => (
        <button key={restaurant.id} onClick={() => setActiveRestaurant(restaurant.id)}>
            {restaurant.name}
        </button>
    ));
};
