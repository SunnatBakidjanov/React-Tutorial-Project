export const TabsButtons = ({ restaurants, handleSetIdOnClick }) => {
    return restaurants.map(restaurant => (
        <button key={restaurant.id} className='restaurant-tab' style={{ padding: "10px 50px", cursor: "pointer" }} onClick={() => handleSetIdOnClick(restaurant.id)}>
            {restaurant.name}
        </button>
    ));
};
