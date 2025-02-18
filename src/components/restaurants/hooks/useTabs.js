import { useState } from "react";

export const useTabs = initialTabId => {
    const [activeTabId, setActiveTabId] = useState(initialTabId);

    const setActiveRestaurant = tabId => {
        if (tabId !== activeTabId) setActiveTabId(tabId);
    };

    return [activeTabId, setActiveRestaurant];
};
