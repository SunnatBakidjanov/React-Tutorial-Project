import { useState } from "react";

export const useTabs = initialTabId => {
    const [activeTabId, setActiveTabId] = useState(initialTabId);

    const setActiveTab = tabId => {
        if (tabId !== activeTabId) setActiveTabId(tabId);
    };

    return [activeTabId, setActiveTab];
};
