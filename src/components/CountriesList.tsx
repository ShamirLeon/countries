import { useContext } from "react"
import { CountriesContext } from "../context/CountriesContext"

/* Components Imports */
import Country from "./Country";

export default function CountriesList() {
    const { countries, loading } = useContext(CountriesContext);
    return (
        <>
            {loading && (<p>Loading...</p>)}
            <div className="grid place-content-center gap-12">
                {countries.map((country) => (
                    <Country country={country} key={country.name.official}></Country>
                ))}
            </div>
        </>
    )
}