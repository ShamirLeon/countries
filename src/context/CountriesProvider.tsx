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
    const { countries, setCountries, loading, error, setError, countriesWithOffset, setCountriesWithOffset, setLoading, reFetchData } = useGetCountries();
    const offset = 8;

    const localDarkMode = JSON.parse(localStorage.getItem("darkMode") as string);

    useEffect(() => {
        if (localDarkMode) {
            document.documentElement.classList.add('dark')
            setDarkMode(true);
        }
        setSelectedRegion(null)
    }, [localDarkMode])


    /* FUNCTIONS */
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    }

    const loadMoreCountries = () => {
        setLoading(true);
        setError(false)
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
        setError(false)
        if (!region) {
            reFetchData()
            setLoading(false);
            return;
        }
        if (isSearching) {
            const filteredCountries = countriesWithOffset.filter((country) => country.region == region)
            if (filteredCountries.length) {
                setCountriesWithOffset(filteredCountries)
                setCountries(filteredCountries)
            } else {
                setError(true)
                setCountriesWithOffset([])
            }
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
        setError(false)
        if (name.length) {
            if (selectedRegion) {
                const regExp = new RegExp(`${name}`, 'i')
                const filteredCountries = countries.filter((country) => {
                    return regExp.test(country.name.common)
                })
                if (filteredCountries.length) {
                    setError(false)
                    setCountriesWithOffset(filteredCountries)
                } else {
                    setCountriesWithOffset([])
                    setError(true)
                }
                return
            }
            setLoading(true)
            setSelectedRegion(null)
            try {
                const { data } = await API.get(`/name/${name}`)
                setCountriesWithOffset(data)
            } catch (error) {
                console.log("Error fetching countries by name", error);
                setCountriesWithOffset([])
                setError(error as Error)
                setLoading(false);
            }
            setLoading(false)
        }
    }

    const clearCountries = () => {
        setCountriesWithOffset([...countries])
        setIsSearching(false)
        setError(null)
        if (!selectedRegion) {
            setSelectedRegion(null)
            reFetchData()
        }
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