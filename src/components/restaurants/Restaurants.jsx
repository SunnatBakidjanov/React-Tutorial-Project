import { useTabs } from "./hooks/useTabs";

import { RestaurantItemContainer } from "./restaurantItem/RestaurantItemContainer";
import { RestaurantTabs } from "./restaurantTabs/RestaurantTabs";
import { ButtonTabContainer } from "../button/ButtonTabContainer";

import styles from "./restauratns.module.scss";

export const Restaurants = ({ restaurantsIds }) => {
    const [activeTabId, setActiveTabId] = useTabs(restaurantsIds?.[0]);

    return (
        <div className={styles.container}>
            <RestaurantTabs>{restaurantsIds ? restaurantsIds.map(id => <ButtonTabContainer key={id} id={id} setActiveRestaurant={() => setActiveTabId(id)} />) : null}</RestaurantTabs>

            {restaurantsIds ? <RestaurantItemContainer id={activeTabId} /> : null}
        </div>
    );
};
