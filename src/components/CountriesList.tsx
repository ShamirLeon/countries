import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

/* Components Imports */
import Country from "./Country";
import NoSearch from "../assets/NoSearch";

export default function CountriesList() {
    const { loading, error, loadMoreCountries, countries, countriesWithOffset, darkMode } =
        useContext(CountriesContext);
    const checkLoadMore = () =>
        countriesWithOffset.length == countries.length ||
        !countriesWithOffset.length;
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-12 lg:gap-12 xl:gap-20">
                {countriesWithOffset.map((country) => (
                    <Country country={country} key={country.name.official}></Country>
                ))}
            </div>
            {!checkLoadMore() && (
                <button
                    onClick={() => loadMoreCountries()}
                    className="block shadow-md py-2 px-4 rounded-md mx-auto mt-8 dark:bg-darkBlue dark:text-white"
                >
                    Load More
                </button>
            )}
            {loading && <p>Loading...</p>}
            {error && (
                <div className="flex items-center justify-center gap-8 w-full mt-6">
                    <NoSearch className="scale-[2]" stroke={darkMode ? "#FFF" : "#000"} />
                    <p className="text-2xl dark:text-pureWhite">No founded countries</p>
                </div>
            )}
        </>
    );
}
