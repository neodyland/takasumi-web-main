import { useEffect, useState } from "react";

export const useIsWide = () => {
    const [isWide, setIsWide] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 780px)");
        const handleMediaChange = (event: MediaQueryListEvent) => {
            setIsWide(event.matches);
        };

        // Set initial value
        setIsWide(mediaQuery.matches);

        // Add event listener
        mediaQuery.addEventListener("change", handleMediaChange);

        // Cleanup event listener on unmount
        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);

    return isWide;
};