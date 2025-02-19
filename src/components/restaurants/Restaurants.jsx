import { useTabs } from "./hooks/useTabs";

import { RestaurantItemContainer } from "./restaurantItem/RestaurantItemContainer";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";
import { ButtonTabContainer } from "../button/ButtonTabContainer";

import styles from "./restauratns.module.scss";

export const Restaurants = ({ restaurants }) => {
    const [activeTabId, setActiveTabId] = useTabs(restaurants?.[0]);

    return (
        <div className={styles.container}>
            <RestaurantTabs>{restaurants ? restaurants.map(id => <ButtonTabContainer key={id} id={id} setActiveRestaurant={() => setActiveTabId(id)} />) : null}</RestaurantTabs>

            {restaurants ? <RestaurantItemContainer id={activeTabId} /> : null}
        </div>
    );
};
