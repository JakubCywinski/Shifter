import { useState, useEffect } from "react";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [componentMounted, setComponentMounted] = useState(false);

    useEffect(() => {
        let preferMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (!preferMode) {
            const d = new Date();
            let hour = d.getHours();

            if (hour >= 6 && hour <= 18) {
                setDarkMode(false);
            } else {
                setDarkMode(true);
            }
        } else {
            setDarkMode(preferMode);
        }

        setComponentMounted(true);
    }, []);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    return [darkMode, toggleMode, componentMounted];
};
