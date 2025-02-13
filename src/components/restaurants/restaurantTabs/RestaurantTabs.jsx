import { TabsButtons } from "../tabsButtons/TabsButtons";

import styles from "./restaurantTabs.module.scss";

export const RestaurantTabs = ({ restaurants, setActiveRestaurant }) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.slider}>
                    <TabsButtons restaurants={restaurants} setActiveRestaurant={setActiveRestaurant} />
                </div>
            </div>
        </div>
    );
};
