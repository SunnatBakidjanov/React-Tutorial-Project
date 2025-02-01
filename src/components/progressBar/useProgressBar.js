import { useState, useEffect } from "react";

const calculateScrollProgress = () => {
    const page = document.documentElement;
    const scrollHeight = page.scrollHeight - page.clientHeight;
    const scrollTop = page.scrollTop;
    return (scrollTop / scrollHeight) * 100;
};

export const useProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => setProgress(calculateScrollProgress());

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { progress };
};
