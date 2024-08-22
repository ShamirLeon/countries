import { CountriesContext } from "./CountriesContext";
import useGetCountries from "../hooks/useGetCountries";
import { useState } from "react";
// import { useEffect } from "react";

export default function CountriesProvider({ children } : { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const { countries, loading, error } = useGetCountries();

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


    return (
        <CountriesContext.Provider value={{
            /* States */
            countries,
            darkMode,
            loading,
            error,
            /* Functions */
            toggleDarkMode
        }}>
            {children}
        </CountriesContext.Provider>
    )
}