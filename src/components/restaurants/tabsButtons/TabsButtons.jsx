export const TabsButtons = ({ restaurants, handleTabClick }) => {
    return restaurants.map(restaurant => (
        <button key={restaurant.id} className='restaurant-tab' style={{ padding: "10px 50px", cursor: "pointer" }} onClick={() => handleTabClick(restaurant.id)}>
            {restaurant.name}
        </button>
    ));
};
