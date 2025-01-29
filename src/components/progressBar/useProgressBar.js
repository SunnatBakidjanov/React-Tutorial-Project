import { useEffect, useRef } from "react";

export const useProgressBar = () => {
    const progressBar = useRef(null);
    const page = useRef(null);

    useEffect(() => {
        page.current = document.documentElement;

        function progress() {
            if (progressBar.current && page.current) {
                const scrollHeight = page.current.scrollHeight - page.current.clientHeight;
                const scrollTop = page.current.scrollTop;
                const progressWidth = (scrollTop / scrollHeight) * 100;
                console.log(progressWidth);

                progressBar.current.style.setProperty("--progress-bar-width", `${progressWidth}%`);
            }
        }

        window.addEventListener("scroll", progress);

        return () => window.removeEventListener("scroll", progress);
    }, []);

    return { progressBar };
};
