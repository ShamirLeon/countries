import { CountriesContext } from "./CountriesContext";

export default function CountriesProvider({ children } : { children: React.ReactNode }) {
    console.log("CountriesProvider");
    return (
        <CountriesContext.Provider value={{}}>
            {children}
        </CountriesContext.Provider>
    )
}