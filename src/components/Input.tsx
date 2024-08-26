import SearchIcon from "../assets/Search"

import { useContext, useEffect, useState } from "react"
import { CountriesContext } from "../context/CountriesContext"
import CloseIcon from "../assets/CloseIcon";

export default function Input() {
    const [name, setName] = useState('');
    const { darkMode, getCountriesByName, clearCountries } = useContext(CountriesContext);

    const clearData = () => {
        setName('')
        clearCountries()
    }

    useEffect(() => {
        const getData = setTimeout(async () => {
            if (name.length) {
                getCountriesByName(name)
            }
        }, 1000)

        return () => clearTimeout(getData)
    }, [name])

    return (
        <div className="flex items-center gap-4 py-4 px-6 rounded-md shadow-md mb-8 dark:bg-darkBlue">
            <SearchIcon stroke={darkMode ? "#FFFFFF" : "#858585"} />
            <input type="text" placeholder="Search for a country..." value={name} className="outline-none border-none bg-inherit dark:text-pureWhite" onChange={(event) => setName(event.target.value.trim())} />
            {
                name && (<button onClick={() => clearData()}> <CloseIcon stroke={darkMode ? "#FFF" : "#858585"} /> </button>)
            }
            
        </div>
    )
}