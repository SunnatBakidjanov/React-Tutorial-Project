import { TabsButtons } from "../tabsButtons/TabsButtons";

export const RestaurantTabs = ({ restaurants, handleTabClick }) => {
    return (
        <div className='restaurant-tabs-box' style={{ display: "flex", alignItems: "center", justifyContent: "center", columnGap: "100px" }}>
            <TabsButtons restaurants={restaurants} handleTabClick={handleTabClick} />
        </div>
    );
};
