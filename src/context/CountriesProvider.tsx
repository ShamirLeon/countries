import { useEffect, useState } from "react";
/* Context imports */
import { CountriesContext } from "./CountriesContext";
import useGetCountries from "../hooks/useGetCountries";

/* Interfaces import */
import { IContinent, IContinents } from "../interfaces/interfaces";
import API from "../config/API";

export default function CountriesProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const regions: IContinents = [IContinent.Africa, IContinent.Antarctic, IContinent.Asia, IContinent.Europe, IContinent.Oceania, IContinent.Americas];
    const { countries, setCountries, loading, error, countriesWithOffset, setCountriesWithOffset, setLoading, reFetchData } = useGetCountries();
    const offset = 8;

    const localDarkMode = JSON.parse(localStorage.getItem("darkMode") as string);

    useEffect(() => {
        if (localDarkMode) {
            document.body.classList.add("dark");
            setDarkMode(true);
        }
    }, [localDarkMode])


    /* FUNCTIONS */
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
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

    const getCountriesByRegion = async (region: string | null) => {
        setLoading(true);
        if (!region) {
            reFetchData()
            setLoading(false);
            return;
        }
        if (isSearching) {
            const filteredCountries = countriesWithOffset.filter((country) => country.region == region )
            setCountriesWithOffset(filteredCountries)
            setCountries(filteredCountries)
            setLoading(false)
        } else {
            try {
                const { data } = await API.get(`region/${region}`);
                const countriesWithOffset = data.slice(0, offset);
                setCountriesWithOffset(countriesWithOffset);
                setCountries(data)
                setLoading(false);
            } catch (error) {
                console.log("Error fetching countries by region", error);
                setLoading(false);
            }
        }
    }

    const getCountriesByName = async (name: string) => {
        setIsSearching(true)
        if (name.length) {
            setLoading(true)
            setSelectedRegion(null)
            try {
                const { data } = await API.get(`/name/${name}`)
                setCountriesWithOffset(data)
            } catch (error) {
                console.log("Error fetching countries by name", error);
                setLoading(false); 
            }
            setLoading(false)
        }
    }

    const clearCountries = () =>   {
        setCountriesWithOffset([...countries])
        setIsSearching(false)
        setSelectedRegion(null)
        reFetchData()
    }

    return (
        <CountriesContext.Provider value={{
            /* States */
            countries,
            countriesWithOffset,
            darkMode,
            loading,
            error,
            regions,
            selectedRegion,
            /* Functions */
            toggleDarkMode,
            loadMoreCountries,
            getCountriesByRegion,
            setSelectedRegion,
            getCountriesByName,
            clearCountries
        }}>
            {children}
        </CountriesContext.Provider>
    )
}