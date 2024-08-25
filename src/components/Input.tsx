import SearchIcon from "../assets/Search"

import { useContext } from "react"
import { CountriesContext } from "../context/CountriesContext"

export default function Input() {
    const { darkMode } = useContext(CountriesContext);
    return (
        <div className="flex items-center gap-4 py-4 px-6 rounded-md shadow-md mb-8 dark:bg-darkBlue">
            <SearchIcon stroke={darkMode ? "#FFFFFF" : "#858585"} />
            <input type="text" placeholder="Search for a country..." className="outline-none border-none bg-inherit dark:text-pureWhite"/>
        </div>
    )
}