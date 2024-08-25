import { useContext, useState } from "react"
import { CountriesContext } from "../context/CountriesContext"
import ChevronDownIcon from "../assets/ChevronDown"

export default function Dropdown() {
    const { darkMode, regions, getCountriesByRegion, selectedRegion, setSelectedRegion } = useContext(CountriesContext)
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => setIsOpen(!isOpen)
    return (
        <div className="relative mb-8">
            <div
                className="flex items-center justify-between text-black py-4 px-6 rounded-md shadow-md  dark:text-pureWhite dark:bg-darkBlue cursor-pointer"
                onClick={() => toggleDropdown()}
            >
                <span>{selectedRegion || "Filter By Region"}</span>
                <div className={isOpen ? "rotate-180 transition-all" : "transition-all"}>
                    <ChevronDownIcon stroke={darkMode ? "#FFF" : "#000"} rotate={'180'} />
                </div>
            </div>
            <div className="absolute top-[80px] w-full z-[800] shadow-md ">
                {isOpen && (
                    <div className="bg-white dark:text-pureWhite dark:bg-darkBlue rounded-md shadow-md overflow-hidden">
                        {regions.map((region, index) => (
                            <div
                                key={index}
                                className="h-full py-2 px-6 hover:bg-gray-200 dark:hover:bg-darkGray cursor-pointer"
                                onClick={() => {
                                    if (selectedRegion === region) {
                                        setSelectedRegion(null)
                                        setIsOpen(false)
                                        getCountriesByRegion(null)
                                        return
                                    }
                                    setSelectedRegion(region)
                                    setIsOpen(false)
                                    getCountriesByRegion(region)
                                }}
                            >
                                {region}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}