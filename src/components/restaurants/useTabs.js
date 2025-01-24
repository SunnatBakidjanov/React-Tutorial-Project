import { useState } from "react";

export const useTabs = restaurants => {
    const [activeTabId, setActiveTabId] = useState(restaurants[0]?.id);

    const handleSetIdOnClick = tabId => {
        if (tabId !== activeTabId) setActiveTabId(tabId);
    };

    return {
        activeTabId,
        handleSetIdOnClick,
    };
};
