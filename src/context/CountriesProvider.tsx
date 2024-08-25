import { CountriesContext } from "./CountriesContext";
import useGetCountries from "../hooks/useGetCountries";
import { useState } from "react";

export default function CountriesProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const { countries, loading, error, countriesWithOffset, setCountriesWithOffset, setLoading } = useGetCountries();
    const offset = 8;

    const localDarkMode = JSON.parse(localStorage.getItem("darkMode") || "false");

    if (localDarkMode) {
        document.body.classList.add("dark");
    }

    /* FUNCTIONS */
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        setDarkMode(!darkMode);
    }

    const loadMoreCountries = () => {
        setLoading(true);
        setTimeout(() => {
            const currentLength = countriesWithOffset.length;
            const nextOffset = currentLength + offset;
            const countriesOffset = countries.slice(0, nextOffset);
            setCountriesWithOffset([...countriesOffset]);
            setLoading(false);
        }, 1000);
    }

    return (
        <CountriesContext.Provider value={{
            /* States */
            countries,
            countriesWithOffset,
            darkMode,
            loading,
            error,
            /* Functions */
            toggleDarkMode,
            loadMoreCountries
        }}>
            {children}
        </CountriesContext.Provider>
    )
}