import { TabsButtons } from "../tabsButtons/TabsButtons";

export const RestaurantTabs = ({ restaurants, handleSetIdOnClick }) => {
    return (
        <div className='restaurant-tabs-box' style={{ display: "flex", alignItems: "center", justifyContent: "center", columnGap: "100px" }}>
            <TabsButtons {...restaurants} handleSetIdOnClick={handleSetIdOnClick} />
        </div>
    );
};
