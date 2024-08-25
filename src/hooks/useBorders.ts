import { useContext } from "react";

/* Contexts imports */
import { CountriesContext } from "../context/CountriesContext";

export default function useBorders(borders: string[]) {
    const { countries } = useContext(CountriesContext);
    const bordersCountries = countries.filter((country) => borders.includes(country.cca3));
    
    return { bordersCountries }
}