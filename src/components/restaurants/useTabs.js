import { useState } from "react";

export const useTabs = restaurants => {
    const [activeTab, setActiveTab] = useState(restaurants[0]?.id);

    const handleTabClick = tabId => {
        if (tabId !== activeTab) {
            setActiveTab(tabId);
        }
    };

    return {
        activeTab,
        handleTabClick,
    };
};
