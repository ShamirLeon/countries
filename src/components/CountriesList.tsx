import { useContext } from "react"
import { CountriesContext } from "../context/CountriesContext"

/* Components Imports */
import Country from "./Country";

export default function CountriesList() {
    const { loading, loadMoreCountries, countries, countriesWithOffset } = useContext(CountriesContext);
    const checkLoadMore = () => countriesWithOffset.length == countries.length
    return (
        <>
            <div className="grid place-content-center gap-12">
                {countriesWithOffset.map((country) => (
                    <Country country={country} key={country.name.official}></Country>
                ))}
                {
                    !checkLoadMore() && (
                        <button onClick={() => loadMoreCountries()} className="shadow-md py-2 px-4 rounded-md m-auto dark:bg-darkBlue dark:text-white">
                            Load More
                        </button>
                    )
                }
            </div>
            {loading && (<p>Loading...</p>)}
        </>
    )
}