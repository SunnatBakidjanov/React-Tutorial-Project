import styles from "./restaurantTabs.module.scss";

export const RestaurantTabs = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};
